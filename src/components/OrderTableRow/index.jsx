import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/authContext";
import {
  CancelButton,
  Code,
  DateTime,
  Products,
  Status,
  ViewButton,
} from "./styles";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Select } from "../Select";
import { api } from "../../services/api";
export function OrderTableRow({ order, setOrderUpdate }) {
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
    <tr>
      <ViewButton className="viewButton">
        <Button
          id="viewDetails"
          title="Visualizar Pedido"
          content="ver detalhes"
          onClick={() => navigate(`/order-details/${order.id}`)}
        />
      </ViewButton>
      <Status className="status">
        {role == "customer" && (
          <div>
            <div className={`coloredBall ${order.status}`}></div>
            <span className="status-text">
              {`${translateStatusToPortuguese(order.status)}`}
            </span>
          </div>
        )}
        {["admin", "employee"].includes(role) && (
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
        )}
      </Status>
      <Code className="code">{order.id.toString().padStart(5, "0")}</Code>
      <Products className="products">
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
      </Products>
      <DateTime className="dateTime">{`${formatDate(
        order.created_at
      )}`}</DateTime>
      {role == "customer" && (
        <CancelButton className="cancelButton">
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
        </CancelButton>
      )}
    </tr>
  );
}
