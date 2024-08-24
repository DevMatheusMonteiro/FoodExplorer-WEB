import { Container } from "./styles.js";
import { api } from "../../services/api.js";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header/index.jsx";
import { Link } from "react-router-dom";
import { Select } from "../../components/Select/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";
import { useAuth } from "../../hooks/authContext.jsx";
import { OrderItem } from "../../components/OrderItem/index.jsx";
import { PaginationButtons } from "../../components/PaginationButtons/index.jsx";
import { OrderTableRow } from "../../components/OrderTableRow/";
import { OrderTable } from "../../components/OrderTable/index.jsx";
export function OrderHistory() {
  const { role } = useAuth();
  const [orders, setOrders] = useState([]);
  const [orderUpdate, setOrderUpdate] = useState();
  const [total, setTotal] = useState(0);
  const [statusFilter, setStatusFilter] = useState({ value: "", label: "" });
  const [page, setPage] = useState(1);
  const options = [
    {
      value: "received",
      label: (
        <span className="statusFilter">
          <span className={`coloredBall received`}></span>
          <span className="status-text">Recebido</span>
        </span>
      ),
    },
    {
      value: "preparing",
      label: (
        <span className="statusFilter">
          <span className={`coloredBall preparing`}></span>
          <span className="status-text">Preparando</span>
        </span>
      ),
    },
    {
      value: "delivering",
      label: (
        <span className="statusFilter">
          <span className={`coloredBall delivering`}></span>
          <span className="status-text">A caminho</span>
        </span>
      ),
    },
    {
      value: "delivered",
      label: (
        <span className="statusFilter">
          <span className={`coloredBall delivered`}></span>
          <span className="status-text">Entregue</span>
        </span>
      ),
    },
    {
      value: "canceled",
      label: (
        <span className="statusFilter">
          <span className={`coloredBall canceled`}></span>
          <span className="status-text">Cancelado</span>
        </span>
      ),
    },
  ];
  function handleFirstPage() {
    setPage(1);
  }
  function handlePreviousPage() {
    setPage(page - 1);
  }
  function handleNextPage() {
    setPage(page + 1);
  }
  function handleLastPage() {
    setPage(Math.ceil(total / 5));
  }
  async function fetchOrders() {
    let res;
    if (role == "customer") {
      res = await api.get(
        `/orders?status=${statusFilter.value}&page=${page - 1}`
      );
    } else {
      res = await api.get(
        `/sales?status=${statusFilter.value}&page=${page - 1}`
      );
    }
    setOrders(res.data.orders);
    setTotal(res.data.total);
  }

  useEffect(() => {
    fetchOrders();
  }, [page, orderUpdate]);
  useEffect(() => {
    page == 1 && fetchOrders();
    page != 1 && setPage(1);
  }, [statusFilter]);
  return (
    <Container>
      <Header />
      <main>
        <Link to={"/"} id="home-link">
          Home
        </Link>
        <div className="title-select">
          <h2>Histórico de Pedidos</h2>
          <Select
            srOnly
            defaultOption="Filtre por status"
            id="orderStatus"
            label="Status"
            name="orderStatus"
            selectedOption={statusFilter}
            setSelectedOption={setStatusFilter}
            options={options}
          />
        </div>
        {orders?.length > 0 && (
          <section className="content">
            <PaginationButtons
              page={page}
              total={total}
              collection={orders}
              handlePreviousPage={handlePreviousPage}
              handleFirstPage={handleFirstPage}
              handleNextPage={handleNextPage}
              handleLastPage={handleLastPage}
            />
            {orders.map((order) => (
              <OrderItem
                key={order.id}
                order={order}
                setOrderUpdate={setOrderUpdate}
              />
            ))}
            <OrderTable orders={orders} setOrderUpdate={setOrderUpdate} />
            <PaginationButtons
              page={page}
              total={total}
              collection={orders}
              handlePreviousPage={handlePreviousPage}
              handleFirstPage={handleFirstPage}
              handleNextPage={handleNextPage}
              handleLastPage={handleLastPage}
            />
          </section>
        )}
        {orders?.length == 0 && (
          <h3 className="not-found">Nenhum pedido encontrado!</h3>
        )}
      </main>
      <Footer />
    </Container>
  );
}
