import { Container } from "./styles";

import { FaChevronLeft, FaEdit, FaMinus, FaPlus } from "react-icons/fa";
import { PiReceipt } from "react-icons/pi";

import empty from "../../assets/empty.svg";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { IconButton } from "../../components/IconButton";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/authContext";

export function ProductDetails() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [orders, setOrders] = useState([]);
  const { role } = useAuth();
  const navigate = useNavigate();

  const image = data.image
    ? `${api.defaults.baseURL}/file/${data.image}`
    : empty;

  function increaseQuantity() {
    const localStorageData = JSON.parse(
      localStorage.getItem("@foodExplorer:products")
    );

    const setLocalStorageDataQuantity = localStorageData.map(
      (localStorageData) => {
        localStorageData.products.map((product) => {
          if (product.id === data.id) {
            product.quantity = product.quantity + 1;
            setData(product);
          }
        });
        return localStorageData;
      }
    );

    localStorage.setItem(
      "@foodExplorer:products",
      JSON.stringify(setLocalStorageDataQuantity)
    );
  }

  function decreaseQuantity() {
    const localStorageData = JSON.parse(
      localStorage.getItem("@foodExplorer:products")
    );

    const setLocalStorageDataQuantity = localStorageData.map(
      (localStorageData) => {
        localStorageData.products.map((product) => {
          if (product.id === data.id) {
            product.quantity = product.quantity - 1;
            setData(product);
          }
        });
        return localStorageData;
      }
    );

    localStorage.setItem(
      "@foodExplorer:products",
      JSON.stringify(setLocalStorageDataQuantity)
    );
  }

  function addToBag() {
    const order = {};

    for (const key in data) {
      if (key === "id") {
        order.product_id = data[key];
      } else {
        order[key] = data[key];
      }
    }

    if (orders.length > 0) {
      if (!!orders.find((product) => product.product_id === data.id)) {
        const newData = [];
        orders.forEach((product) => {
          if (product.product_id === data.id) {
            product = order;
          }

          newData.push(product);
        });

        setOrders(newData);
      } else {
        setOrders((prevState) => [...prevState, order]);
      }
      return;
    }

    setOrders((prevState) => [...prevState, order]);
  }

  useEffect(() => {
    api.get(`products/${id}`).then((res) =>
      setData(() => {
        const localStorageData = JSON.parse(
          localStorage.getItem("@foodExplorer:products")
        );

        const localStorageProducts = [];

        localStorageData.forEach((localStorageData) => {
          localStorageData.products.forEach((product) =>
            localStorageProducts.push(product)
          );
        });

        localStorageProducts.forEach((product) => {
          if (product.id === res.data.id) {
            res.data.quantity = product.quantity;
          }
        });

        return res.data;
      })
    );
    const localStorageOrders = JSON.parse(
      localStorage.getItem("@foodExplorer:orders")
    );

    if (localStorageOrders && orders.length === 0) {
      setOrders(localStorageOrders);
    } else {
      orders.length > 0 &&
        localStorage.setItem("@foodExplorer:orders", JSON.stringify(orders));
    }
  }, [orders]);

  return (
    <Container>
      <Header orders={orders} />
      <main>
        <Link to={-1}>
          <FaChevronLeft />
          voltar
        </Link>
        {data && (
          <section>
            <img src={image} alt={data.name} />

            <div>
              <h2>{data.name}</h2>
              {data.description && <p>{data.description}</p>}

              {data.ingredients && data.ingredients.length > 0 && (
                <ul>
                  {data.ingredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.name}</li>
                  ))}
                </ul>
              )}

              {role == "customer" && (
                <div className="quantity-button">
                  <div className="quantity-container">
                    <IconButton
                      onClick={decreaseQuantity}
                      icon={FaMinus}
                      disabled={data.quantity === 1}
                    />

                    {
                      <p className="quantity">
                        {data.quantity?.toString().padStart(2, "0")}
                      </p>
                    }

                    <IconButton onClick={increaseQuantity} icon={FaPlus} />
                  </div>

                  <Button
                    title="Clique para incluir na sacola"
                    type="button"
                    onClick={addToBag}
                    content={`incluir ∙ R$ ${(data.quantity * data.price)
                      ?.toFixed(2)
                      .replace(".", ",")}`}
                    icon={PiReceipt}
                  />
                </div>
              )}
              {["admin", "employee"].includes(role) && (
                <>
                  <p className="price">{`R$ ${data.price
                    ?.toFixed(2)
                    .replace(".", ",")}`}</p>
                  <Button
                    onClick={() => navigate(`/edit-product/${data.id}`)}
                    title="Clique para editar prato"
                    type="button"
                    content="Editar Prato"
                    icon={FaEdit}
                    className="edit"
                  />
                </>
              )}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </Container>
  );
}
