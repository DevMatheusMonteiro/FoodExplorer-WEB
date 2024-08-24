import { Container } from "./styles";
import qrCode from "../../assets/qr_code.svg";
import { Button } from "../Button";
import { CardContainer } from "../CardContainer";
import { FaCreditCard } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
export function PaymentMethodContainer({
  page,
  setPage,
  paymentMethod,
  setPaymentMethod,
  handleCreateOrder,
}) {
  const [debitCards, setDebitCards] = useState([]);
  const [updateDebitCards, setUpdateDebitCards] = useState([]);
  const [creditCards, setCreditCards] = useState([]);
  const [updatedCreditCards, setUpdateCreditCards] = useState([]);
  const [searchDebitCards, setSearchDebitCards] = useState("");
  const [searchCreditCards, setSearchCreditCards] = useState("");
  async function fetchDebitCards() {
    const res = await api.get(`/cards?nickname=${searchDebitCards}&type=debit`);
    setDebitCards(res.data);
  }
  async function fetchCreditCards() {
    const res = await api.get(
      `/cards?nickname=${searchCreditCards}&type=credit`
    );
    setCreditCards(res.data);
  }
  useEffect(() => {
    fetchDebitCards();
  }, [searchDebitCards, updateDebitCards]);
  useEffect(() => {
    fetchCreditCards();
  }, [searchCreditCards, updatedCreditCards]);
  return (
    <Container data-page={page} className="paymentMethodContainer">
      <h2>Pagamento</h2>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th data-active={paymentMethod === "pix"}>
                <button
                  disabled={page != null && page != 3}
                  onClick={() => setPaymentMethod("pix")}
                >
                  <FaPix />
                  <span>Pix</span>
                </button>
              </th>
              <th data-active={paymentMethod === "credit"}>
                <button
                  disabled={page != null && page != 3}
                  onClick={() => setPaymentMethod("credit")}
                >
                  <FaCreditCard />
                  <span>Crédito</span>
                </button>
              </th>
              <th data-active={paymentMethod === "debit"}>
                <button
                  disabled={page != null && page != 3}
                  onClick={() => setPaymentMethod("debit")}
                >
                  <FaCreditCard />
                  <span>Débito</span>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={3}>
                <div className="pix" data-active={paymentMethod === "pix"}>
                  <img src={qrCode} alt="Qr Code" />
                </div>
                <CardContainer
                  setUpdateCards={setUpdateCreditCards}
                  cards={creditCards}
                  active={paymentMethod === "credit"}
                  setSearchCards={setSearchCreditCards}
                  disabled={page != null && page !== 3}
                  type="credit"
                />

                <CardContainer
                  setUpdateCards={setUpdateDebitCards}
                  cards={debitCards}
                  active={paymentMethod === "debit"}
                  setSearchCards={setSearchDebitCards}
                  disabled={page != null && page != 3}
                  type="debit"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container-page-buttons">
        <Button
          type="button"
          disabled={page != null && page != 3}
          onClick={() => {
            setPage(2);
          }}
          className="goBack"
          content="Voltar"
          title="Clique para Voltar"
        />

        <Button
          disabled={page != null && page != 3}
          type="button"
          className="finalizePayment"
          content="Finalizar pagamento"
          title="Clique para finalizar pagamento"
          onClick={handleCreateOrder}
        />
      </div>
    </Container>
  );
}
