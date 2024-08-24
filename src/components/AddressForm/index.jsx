import { Container } from "./styles";
import { FaHome, FaCoffee } from "react-icons/fa";
import { Input } from "../Input";
import { Select } from "../Select";
import { Button } from "../Button";
export function AddressForm({
  onSubmit,
  disabled,
  reset,
  formContainer,
  address,
  setStreet,
  setStreetError,
  streetError,
  setNumber,
  setNumberError,
  numberError,
  setComplement,
  setNeighborhood,
  setNeighborhoodError,
  neighborhoodError,
  setCity,
  setCityError,
  cityError,
  setZipCode,
  setZipCodeError,
  zipCodeError,
  state,
  setState,
  setStateError,
  stateError,
  type,
  setType,
}) {
  const states = [
    { value: "ac", label: "AC" },
    { value: "al", label: "AL" },
    { value: "ap", label: "AP" },
    { value: "am", label: "AM" },
    { value: "ba", label: "BA" },
    { value: "ce", label: "CE" },
    { value: "ce", label: "CE" },
    { value: "df", label: "DF" },
    { value: "es", label: "ES" },
    { value: "go", label: "GO" },
    { value: "ma", label: "MA" },
    { value: "mt", label: "MT" },
    { value: "ms", label: "MS" },
    { value: "mg", label: "MG" },
    { value: "pa", label: "PA" },
    { value: "pb", label: "PB" },
    { value: "pr", label: "PR" },
    { value: "pe", label: "PE" },
    { value: "pi", label: "PI" },
    { value: "rj", label: "RJ" },
    { value: "rn", label: "RN" },
    { value: "rs", label: "RS" },
    { value: "ro", label: "RO" },
    { value: "rr", label: "RR" },
    { value: "sc", label: "SC" },
    { value: "sp", label: "SP" },
    { value: "se", label: "SE" },
    { value: "to", label: "TO" },
  ];
  function handleOnChange(e, setValue, setError) {
    setError && setError(false);
    setValue(e.target.value.trim());
  }

  return (
    <Container onSubmit={onSubmit} ref={formContainer} className="address-form">
      <div className="inputs-container">
        <Input
          defaultValue={address ? address.street : ""}
          error={streetError}
          onChange={(e) => handleOnChange(e, setStreet, setStreetError)}
          disabled={disabled}
          placeholder="Informe o logradouro"
          description="Logradouro"
          id="street"
        />
        <Input
          defaultValue={address ? address.number : ""}
          error={numberError}
          onChange={(e) => handleOnChange(e, setNumber, setNumberError)}
          disabled={disabled}
          placeholder="Informe o número"
          description="Número"
          id="number"
        />
      </div>
      <div className="inputs-container">
        <Input
          defaultValue={address ? address.complement : ""}
          onChange={(e) => handleOnChange(e, setComplement)}
          disabled={disabled}
          placeholder="Informe o complemento"
          description="Complemento"
          id="complement"
        />
        <Input
          defaultValue={address ? address.neighborhood : ""}
          error={neighborhoodError}
          onChange={(e) =>
            handleOnChange(e, setNeighborhood, setNeighborhoodError)
          }
          disabled={disabled}
          placeholder="Informe o bairro"
          description="Bairro"
          id="neighborhood"
        />
      </div>
      <div className="inputs-container">
        <Input
          defaultValue={address ? address.city : ""}
          error={cityError}
          onChange={(e) => handleOnChange(e, setCity, setCityError)}
          disabled={disabled}
          placeholder="Informe a cidade"
          description="Cidade"
          id="city"
        />

        <Select
          error={stateError}
          setError={setStateError}
          disabled={disabled}
          hideAll
          hideIcon
          id="state"
          name="state"
          defaultOption="Selecione o Estado"
          selectedOption={state}
          setSelectedOption={setState}
          label="Estado"
          options={states}
        />

        <Input
          defaultValue={address ? address.zipCode : ""}
          error={zipCodeError}
          onChange={(e) => handleOnChange(e, setZipCode, setZipCodeError)}
          disabled={disabled}
          placeholder="Informe o CEP"
          description="CEP"
          id="zipCode"
        />
      </div>

      <div className="type-buttons-container">
        <Button
          data-selected={type === "home"}
          icon={FaHome}
          type="button"
          disabled={disabled}
          content="Casa"
          title="Clique para definir como casa"
          onClick={() =>
            type === "home" ? setType("general") : setType("home")
          }
        />
        <Button
          data-selected={type === "work"}
          icon={FaCoffee}
          type="button"
          disabled={disabled}
          content="Trabalho"
          title="Clique para definir como trabalho"
          onClick={() =>
            type === "work" ? setType("general") : setType("work")
          }
        />
      </div>

      <div className="buttons-container">
        <Button
          type="button"
          disabled={disabled}
          onClick={reset}
          content="Cancelar"
          title="Clique para cancelar a atualização"
        />
        <Button
          onKeyDown={(e) => {
            if (!disabled && e.key === "Tab" && !e.shiftKey) {
              reset();
            }
          }}
          disabled={disabled}
          content={address ? "Confirmar" : "Adicionar"}
          title="Clique para adicionar o novo endereço"
        />
      </div>
    </Container>
  );
}
