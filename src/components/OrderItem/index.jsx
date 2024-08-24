import { useEffect, useState } from "react";
import { Select } from "../Select";
import { Container } from "./styles";
import { Button } from "../Button";
import { useAuth } from "../../hooks/authContext";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
export function OrderItem({ order, setOrderUpdate }) {
  const { role } = useAuth();
  const navigate = useNavigate();
  const [status, setStatus] = useState({
    value: order.status,
    label: (
      <span className="status">
        <span className={`coloredBall ${order.status}`}></span>
        <span className="status-text">
          {`${translateStatusToPortuguese(order.status)}`}
        </span>
      </span>
    ),
  });
  const options = [
    {
      value: "received",
      label: (
        <span className="status">
          <span className={`coloredBall received`}></span>
          <span className="status-text">Recebido</span>
        </span>
      ),
    },
    {
      value: "preparing",
      label: (
        <span className="status">
          <span className={`coloredBall preparing`}></span>
          <span className="status-text">Preparando</span>
        </span>
      ),
    },
    {
      value: "delivering",
      label: (
        <span className="status">
          <span className={`coloredBall delivering`}></span>
          <span className="status-text">A caminho</span>
        </span>
      ),
    },
    {
      value: "delivered",
      label: (
        <span className="status">
          <span className={`coloredBall delivered`}></span>
          <span className="status-text">Entregue</span>
        </span>
      ),
    },
    {
      value: "canceled",
      label: (
        <span className="status">
          <span className={`coloredBall canceled`}></span>
          <span className="status-text">Cancelado</span>
        </span>
      ),
    },
  ];
  function formatDate(date) {
    const originalDate = new Date(date);
    originalDate.setHours(originalDate.getHours() - 3);
    return `${originalDate.getDate().toString().padStart(2, "0")}/${(
      originalDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")} às ${originalDate
      .getHours()
      .toString()
      .padStart(2, "0")}h${originalDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  }
  function translateStatusToPortuguese(status) {
    return status == "received"
      ? "Recebido"
      : status == "preparing"
      ? "Preparando"
      : status == "delivering"
      ? "A caminho"
      : status == "delivered"
      ? "Entregue"
      : "Cancelado";
  }
  async function handleCancelOrder(id) {
    await api.patch(`/orders/${id}`, { status: "canceled" });
    setOrderUpdate(id);
  }
  async function handleUpdateStatus(id) {
    if (status.value != order.status) {
      await api.patch(`/orders/${id}`, { status: status.value });
      setOrderUpdate(status);
    }
  }
  useEffect(() => {
    handleUpdateStatus(order.id);
  }, [status]);
  return (
    <Container className="order-item">
      <div className="header">
        <span className="code">{order.id.toString().padStart(5, "0")}</span>
        {role == "customer" && (
          <div className="status">
            <div className={`coloredBall ${order.status}`}></div>
            <span className="status-text">
              {`${translateStatusToPortuguese(order.status)}`}
            </span>
          </div>
        )}
        <span className="created">{`${formatDate(order.created_at)}`}</span>
      </div>
      <div className="products">
        {order.products.length > 0 &&
          order.products.map((product, index) => {
            return order.products.length - 1 != index ? (
              <span key={product.id}>
                {product.quantity}x {product.name},&nbsp;
              </span>
            ) : (
              <span key={product.id}>
                {product.quantity}x {product.name}
              </span>
            );
          })}
      </div>
      {role == "customer" && (
        <div className="container-button">
          <Button
            id="viewDetails"
            title="Visualizar Pedido"
            content="ver detalhes"
            onClick={() => navigate(`/order-details/${order.id}`)}
          />
          <Button
            disabled={
              !["received", "preparing"].find(
                (status) => status == order.status
              )
            }
            onClick={() => handleCancelOrder(order.id)}
            id="cancelButton"
            title="Cancelar Pedido"
            content="cancelar"
          />
        </div>
      )}
      {["admin", "employee"].includes(role) && (
        <div className="select-details-container">
          <Select
            srOnly
            hideAll
            hideIcon
            defaultOption="Selecione um status para atualizar"
            id={`${order.id}`}
            label="Status do pedido"
            name={`${order.id}`}
            selectedOption={status}
            setSelectedOption={setStatus}
            options={options}
          />
          <Button
            id="viewDetails"
            title="Visualizar Pedido"
            content="ver detalhes"
            onClick={() => navigate(`/order-details/${order.id}`)}
          />
        </div>
      )}
    </Container>
  );
}
