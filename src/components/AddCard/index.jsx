import { useState } from "react";
import { api } from "../../services/api";
import { Button } from "../Button";
import { Input } from "../Input";
import { Container } from "./styles";

export function AddCard({
  addCardContainer,
  open = false,
  setOpen,
  setUpdateCard,
  type,
}) {
  const [nickname, setNickname] = useState("");
  const [nicknameError, setNicknameError] = useState(false);
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState(false);
  const [expirationDate, setExpirationDate] = useState("");
  const [expirationDateError, setExpirationDateError] = useState(false);
  const [holderName, setHolderName] = useState("");
  const [holderNameError, setHolderNameError] = useState(false);
  const [securityCode, setSecurityCode] = useState("");
  const [securityCodeError, setSecurityCodeError] = useState(false);
  const [cpf, setCpf] = useState("");
  const [cpfError, setCpfError] = useState(false);

  async function addCard(e) {
    e.preventDefault();
    try {
      if (
        [nickname, number, expirationDate, holderName, securityCode, cpf].some(
          (item) => item === ""
        )
      ) {
        nickname === "" && setNicknameError(true);
        number === "" && setNumberError(true);
        expirationDate === "" && setExpirationDateError(true);
        holderName === "" && setHolderNameError(true);
        securityCode === "" && setSecurityCodeError(true);
        cpf === "" && setCpfError(true);

        alert("Preencha todos os campos!!");
        return;
      }

      const res = await api.post("/cards", {
        nickname,
        type,
        number,
        expirationDate,
        holderName,
        securityCode,
        cpf,
      });

      setUpdateCard(res.data);
      reset();
    } catch (e) {
      if (e.response?.status < 400 || e.response?.status > 499) {
        alert(
          `Não foi possível adicionar o cartão de ${
            type === "credit" ? "crédito" : "débito"
          }`
        );
      } else {
        alert(e.response.data.message);
      }
    }
  }

  function reset() {
    setNickname("");
    setNicknameError(false);
    setNumber("");
    setNumberError(false);
    setExpirationDate("");
    setExpirationDateError(false);
    setHolderName("");
    setHolderNameError(false);
    setSecurityCode("");
    setSecurityCodeError(false);
    setCpf("");
    setCpfError(false);

    setOpen(false);
  }

  function handleOnChange(e, setState, setStateError) {
    setStateError(false);
    setState(e.target.value);
  }

  return (
    <Container
      data-open={open}
      onSubmit={(e) => addCard(e)}
      tabIndex={open ? 0 : -1}
      ref={addCardContainer}
    >
      <div className="holderName-cpf">
        <Input
          error={holderNameError}
          onChange={(e) => {
            setHolderName(e.target.value);
            setHolderNameError(false);
          }}
          disabled={!open}
          description="Nome do proprietário"
          id="cardHolderName"
          placeholder="Arthur Antunes Coimbra"
          value={holderName}
        />

        <Input
          error={cpfError}
          onChange={(e) => {
            let digits = e.target.value.replace(/\D/g, "");

            let format = digits.replace(
              /(\d{3})(\d{3})(\d{3})(\d{2})/,
              "$1.$2.$3-$4"
            );

            e.target.value = format;
            setCpf(e.target.value);
            setCpfError(false);
          }}
          maxLength="12"
          disabled={!open}
          description="CPF"
          id="cardCPF"
          placeholder="000.000.000-00"
          value={cpf}
        />
      </div>

      <div className="nickname-number">
        <Input
          error={nicknameError}
          onChange={(e) => {
            setNickname(e.target.value);
            setNicknameError(false);
          }}
          disabled={!open}
          description="Apelido do cartão"
          id="cardNickName"
          placeholder="Meu Cartão"
          value={nickname}
        />

        <Input
          error={numberError}
          onChange={(e) => {
            let digits = e.target.value.replace(/\D/g, "");

            let format = digits.replace(
              /(\d{4})(\d{4})(\d{4})(\d{4})/,
              "$1 $2 $3 $4"
            );

            e.target.value = format;

            setNumber(e.target.value);
            setNumberError(false);
          }}
          maxLength="16"
          disabled={!open}
          description="Número do cartão"
          id="cardNumber"
          placeholder="0000 0000 0000 0000"
          value={number}
        />
      </div>

      <div className="expiration-code">
        <Input
          error={expirationDateError}
          onChange={(e) => {
            let digits = e.target.value.replace(/[^\d/]|()/g, "");

            let month = digits.substring(0, 2).replace(/[^\d]|()/g, "");

            if (month === "" || month.length <= 1) {
              e.target.value = month;
              setExpirationDate(e.target.value);
              return;
            }

            month = parseInt(digits.substring(0, 2));

            if (month < 1) month = 1;
            if (month > 12) month = 12;

            let year =
              digits.substring(2, 3) +
              digits.substring(3).replace(/[^\d]|()/g, "");

            let format = month.toString().padStart(2, "0") + year;

            if (format.charAt(2) !== "/")
              format = format.replace(/(\d{2})(\d{4})/, "$1/$2");

            e.target.value = format;

            setExpirationDate(e.target.value);
            setExpirationDateError(false);
          }}
          onBlur={(e) => {
            if (e.target.value === "") {
              return;
            }

            let month = e.target.value.substring(0, 2);
            let slash = e.target.value.substring(2, 3);
            let year = e.target.value.substring(3);
            if (slash !== "/") {
              year = e.target.value.substring(2);
              e.target.value = month + "/" + year;
              slash = e.target.value.substring(2, 3);
            }

            let format =
              year.length === 0
                ? (year = "2000")
                : year.length === 1
                ? year.padStart(4, "200")
                : year.length < 4 && year.length > 1
                ? year.padStart(4, "20")
                : year;

            e.target.value = month + slash + format;

            setExpirationDate(e.target.value);
          }}
          maxLength="7"
          disabled={!open}
          description="Validade"
          id="cardExpirationDate"
          placeholder="04/2027"
          value={expirationDate}
        />
        <Input
          error={securityCodeError}
          onChange={(e) => {
            let digits = e.target.value.replace(/\D/g, "");
            e.target.value = digits;

            setSecurityCode(e.target.value);
            setSecurityCodeError(false);
          }}
          maxLength="3"
          disabled={!open}
          description="CVC"
          id="cardSecurityCode"
          placeholder="000"
          value={securityCode}
        />
      </div>

      <div className="container-buttons">
        <Button
          type="button"
          disabled={!open}
          className="cancel"
          content="Cancelar"
          title="Clique para cancelar o cartão"
          onClick={() => reset()}
        />
        <Button
          disabled={!open}
          className="registerCard"
          content="Cadastrar"
          title="Clique para cadastrar o cartão"
        />
      </div>
    </Container>
  );
}
