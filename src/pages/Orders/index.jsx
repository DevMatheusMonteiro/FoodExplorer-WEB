import { Container } from "./styles";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFaceFrown } from "react-icons/fa6";
import { api } from "../../services/api";
import { ShoppingBag } from "../../components/ShoppingBag";
import { AddressContainer } from "../../components/AddressContainer";
import { PaymentMethodContainer } from "../../components/PaymentMethodContainer";
import { Button } from "../../components/Button";
export function Orders() {
  const [page, setPage] = useState(1);
  const [orders, setOrders] = useState([]);
  const [amount, setAmount] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState(0);

  const [paymentMethod, setPaymentMethod] = useState("pix");
  const navigate = useNavigate();
  async function handleCreateOrder() {
    const order = { paymentMethod, address_id: selectedAddress, orders };
    await api.post("orders", order);
    localStorage.removeItem("@foodExplorer:orders");
    localStorage.removeItem("@foodExplorer:products");
    navigate("/");
  }
  function removeOrder(product_id) {
    const filteredOrder = orders.filter(
      (order) => order.product_id !== product_id
    );

    localStorage.setItem("@foodExplorer:orders", JSON.stringify(filteredOrder));
    setOrders(filteredOrder);

    if (filteredOrder.length === 0) {
      localStorage.removeItem("@foodExplorer:orders");
      localStorage.removeItem("@foodExplorer:products");
      navigate("/");
    }
  }
  useEffect(() => {
    const localStorageOrders = JSON.parse(
      localStorage.getItem("@foodExplorer:orders")
    );

    if (localStorageOrders && orders.length === 0) {
      setOrders(localStorageOrders);

      const quantity = {};

      localStorageOrders.forEach((order) => {
        quantity[order.product_id] = order.quantity;
      });

      const amount = localStorageOrders.reduce((amount, order) => {
        return order.price * quantity[order.product_id] + amount;
      }, 0);

      setAmount(amount);
    } else if (orders.length) {
      localStorage.setItem("@foodExplorer:orders", JSON.stringify(orders));

      const quantity = {};

      orders.forEach((order) => {
        quantity[order.product_id] = order.quantity;
      });

      const amount = orders.reduce((amount, order) => {
        return order.price * quantity[order.product_id] + amount;
      }, 0);

      setAmount(amount);
    }
  }, [orders]);
  return (
    <Container>
      <Header orders={orders} />
      <main>
        <Link to={"/"} id="home-link">
          Home
        </Link>

        {orders.length > 0 && (
          <>
            <div className="mobile-container">
              <ShoppingBag
                amount={amount}
                orders={orders}
                page={page}
                setPage={setPage}
                removeOrder={removeOrder}
              />
              <AddressContainer
                page={page}
                setPage={setPage}
                selectedAddress={selectedAddress}
                setSelectedAddress={setSelectedAddress}
              />
              <PaymentMethodContainer
                handleCreateOrder={handleCreateOrder}
                page={page}
                setPage={setPage}
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
              />
            </div>
            <div className="desktop-container">
              <ShoppingBag
                amount={amount}
                orders={orders}
                removeOrder={removeOrder}
              />
              <AddressContainer
                selectedAddress={selectedAddress}
                setSelectedAddress={setSelectedAddress}
              />
              <PaymentMethodContainer
                handleCreateOrder={handleCreateOrder}
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
              />
              <Button
                type="button"
                className="finalizePayment"
                content="Finalizar pagamento"
                title="Clique para finalizar pagamento"
                onClick={handleCreateOrder}
              />
            </div>
          </>
        )}
        {orders.length === 0 && (
          <div className="empty">
            <p>Sacola de compras vazia!</p>
            <FaFaceFrown />
          </div>
        )}
      </main>
      <Footer />
    </Container>
  );
}
