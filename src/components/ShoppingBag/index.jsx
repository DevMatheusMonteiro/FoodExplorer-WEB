import { Container } from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { api } from "../../services/api";
import empty from "../../assets/empty.svg";
export function ShoppingBag({ page, setPage, orders, amount, removeOrder }) {
  return (
    <Container className="shoppingBagContainer" data-page={page}>
      <h2>Meu Pedido</h2>
      <ul className="orders-list">
        {orders.map((order) => {
          const image = order.image
            ? `${api.defaults.baseURL}/file/${order.image}`
            : empty;

          return (
            <li className="order-item" key={order.product_id}>
              <div>
                <Link
                  tabIndex={page != null && page != 1 ? -1 : 0}
                  to={`/product-details/${order.product_id}`}
                >
                  <img src={image} alt={order.name} title={order.name} />
                </Link>
                <div>
                  <Link
                    tabIndex={page != null && page != 1 ? -1 : 0}
                    to={`/product-details/${order.product_id}`}
                    className="order-name"
                  >
                    {`${order.quantity}x${order.name}`}
                  </Link>
                  <button
                    disabled={page != null && page != 1}
                    onClick={() => removeOrder(order.product_id)}
                    type="button"
                    className="text-button"
                  >
                    Remover Pedido
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="amount">Total: R$ {amount.toFixed(2).replace(".", ",")}</p>
      <Button
        disabled={page != null && page !== 1}
        onClick={() => {
          setPage(2);
        }}
        className="goForward"
        content="Avançar"
        title="Clique para Avançar"
      />
    </Container>
  );
}
