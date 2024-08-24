import { Link, useParams } from "react-router-dom";
import { Container } from "./styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import empty from "../../assets/empty.svg";
import { FaChevronLeft } from "react-icons/fa";
import { useAuth } from "../../hooks/authContext";
export function OrderDetails() {
  const { role } = useAuth();
  const { id } = useParams();
  const [order, setOrder] = useState();
  async function fetchOrder() {
    let res;
    if (role == "customer") {
      res = await api.get(`/orders/${id}`);
    } else {
      res = await api.get(`/sales/${id}`);
    }
    setOrder(res.data);
  }
  function translateStatusToPortuguese(status) {
    return status == "received"
      ? "recebido"
      : status == "preparing"
      ? "preparando"
      : status == "delivering"
      ? "a caminho"
      : status == "delivered"
      ? "entregue"
      : "cancelado";
  }
  function displayImage(image) {
    return image ? `${api.defaults.baseURL}/file/${image}` : empty;
  }
  function formatDate(date) {
    const originalDate = new Date(date);
    originalDate.setHours(originalDate.getHours() - 3);
    return `${originalDate.getDate().toString().padStart(2, "0")}/${(
      originalDate.getMonth() + 1
    )
      .toString()
      .padStart(
        2,
        "0"
      )} às ${originalDate.getHours()}h${originalDate.getMinutes()}`;
  }
  useEffect(() => {
    fetchOrder();
  }, []);
  return (
    <Container>
      <Header />
      <main>
        <Link to={-1} id="go-back">
          <FaChevronLeft />
          voltar
        </Link>
        {order && (
          <>
            <div className="status-created">
              <div className="status">
                <div className={`coloredBall ${order.status}`}></div>
                <span>{`${translateStatusToPortuguese(order.status)}`}</span>
              </div>
              <span className="created">{`${formatDate(
                order.created_at
              )}`}</span>
            </div>

            <p className="amount">
              Total: R$ {order.amount.toFixed(2).replace(".", ",")}
            </p>

            <div className="products">
              <h3>Produtos</h3>
              <div>
                {order.products.map((product) => (
                  <div className="product" key={product.id}>
                    <img
                      className="product-image"
                      src={displayImage(product.image)}
                      alt={product.name}
                      title={product.name}
                    />
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">
                      R$ {product.price.toFixed(2).replace(".", ",")}
                    </p>
                    <p className="product-quantity">
                      Quantidade: {product.quantity}
                    </p>
                    {product.description &&
                      (product.description.length > 50 ? (
                        <small
                          title={product.description}
                          className="product-description"
                        >
                          {product.description.substring(0, 50).padEnd(53, ".")}
                        </small>
                      ) : (
                        <small className="product-description">
                          {product.description}
                        </small>
                      ))}
                  </div>
                ))}
              </div>
            </div>
            {order.address && (
              <div className="address">
                <h3>Endereço</h3>
                <p>
                  {order.address.street}, {order.address.number}
                </p>
                <p>{order.address.complement}</p>
                <p>{order.address.neighborhood}</p>
                <p>
                  {order.address.city}, {order.address.state}
                </p>
                <p>{order.address.zipCode}</p>
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </Container>
  );
}
