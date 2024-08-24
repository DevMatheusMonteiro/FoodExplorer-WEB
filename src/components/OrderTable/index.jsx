import { useAuth } from "../../hooks/authContext";
import { OrderTableRow } from "../OrderTableRow";
import { Container } from "./styles";

export function OrderTable({ orders, setOrderUpdate }) {
  const { role } = useAuth();
  return (
    <Container className="order-table">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Status</th>
            <th>Código</th>
            <th>Detalhamento</th>
            <th>Data e hora</th>
            {role == "customer" && <th></th>}
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderTableRow
              key={order.id}
              order={order}
              setOrderUpdate={setOrderUpdate}
            />
          ))}
        </tbody>
      </table>
    </Container>
  );
}
