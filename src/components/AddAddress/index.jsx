import { Container } from "./styles";

import { FaHome, FaCoffee } from "react-icons/fa";

import { useRef, useState } from "react";
import { Input } from "../Input";
import { Select } from "../Select";
import { Button } from "../Button";
import { AddressForm } from "../AddressForm";

import { api } from "../../services/api";

export function AddAddress({
  openAddAddress,
  setOpenAddAddress,
  setUpdatedAddress,
}) {
  const [street, setStreet] = useState("");
  const [streetError, setStreetError] = useState(false);

  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState(false);

  const [neighborhood, setNeighborhood] = useState("");
  const [neighborhoodError, setNeighborhoodError] = useState(false);

  const [complement, setComplement] = useState("");

  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState(false);

  const [state, setState] = useState({
    value: "",
    label: "",
  });

  const [stateError, setStateError] = useState(false);

  const [zipCode, setZipCode] = useState("");
  const [zipCodeError, setZipCodeError] = useState(false);

  const [type, setType] = useState("general");

  const formContainer = useRef();

  async function handleAddAddress(e) {
    e.preventDefault();

    try {
      const newAddress = {
        selected: 1,
        street,
        number,
        neighborhood,
        complement,
        city,
        state: state.label,
        zipCode,
        type,
      };

      if (
        street === "" ||
        number === "" ||
        neighborhood === "" ||
        state.label === "" ||
        city === "" ||
        zipCode === ""
      ) {
        street === "" && setStreetError(true);
        number === "" && setNumberError(true);
        neighborhood === "" && setNeighborhoodError(true);
        state.label === "" && setStateError(true);
        city === "" && setCityError(true);
        zipCode === "" && setZipCodeError(true);
      }

      complement === "" && setComplement(null);

      const res = await api.post(`/addresses`, newAddress);

      newAddress.id = res.data;

      setUpdatedAddress(newAddress);

      reset();
    } catch (e) {
      if (e.response) {
        alert(e.response.data.message);
      }
    }
  }

  function reset() {
    setOpenAddAddress(false);

    setStreet("");
    setNumber("");
    setNeighborhood("");
    setComplement("");
    setCity("");
    setZipCode("");
    setType("general");
    setStreetError(false);
    setNumberError(false);
    setNeighborhoodError(false);
    setCityError(false);
    setStateError(false);
    setZipCodeError(false);
    formContainer.current
      .querySelectorAll(".inputContainer input")
      .forEach((input) => {
        input.value = "";
      });

    state.value != "" &&
      (formContainer.current.querySelector(
        `.select-container .options-list .option-value input[value="${state.value}"]`
      ).checked = false);

    setState({
      value: "",
      label: "",
    });
  }

  return (
    <Container data-open={openAddAddress}>
      <h3>Novo Endereço</h3>
      <AddressForm
        onSubmit={handleAddAddress}
        reset={reset}
        disabled={!openAddAddress}
        formContainer={formContainer}
        setStreet={setStreet}
        setStreetError={setStreetError}
        streetError={streetError}
        setNumber={setNumber}
        setNumberError={setNumberError}
        numberError={numberError}
        setComplement={setComplement}
        setNeighborhood={setNeighborhood}
        setNeighborhoodError={setNeighborhoodError}
        neighborhoodError={neighborhoodError}
        setCity={setCity}
        setCityError={setCityError}
        cityError={cityError}
        state={state}
        setState={setState}
        stateError={stateError}
        setStateError={setStateError}
        type={type}
        setType={setType}
        setZipCode={setZipCode}
        setZipCodeError={setZipCodeError}
        zipCodeError={zipCodeError}
      />
    </Container>
  );
}
