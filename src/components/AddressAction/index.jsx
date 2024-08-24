import { Container } from "./styles";
import { FaEdit } from "react-icons/fa";
import { api } from "../../services/api";
import { useRef, useState } from "react";
import { AddressForm } from "../AddressForm";
import { IconButton } from "../IconButton";
import { TbTrash } from "react-icons/tb";
export function AddressAction({
  openAddressButtons = false,
  addressId,
  selectedAddress = false,
  setUpdateAddress,
  removeAddress,
}) {
  const [address, setAddress] = useState({});
  const [openEditAddress, setOpenEditAddress] = useState(false);
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [complement, setComplement] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState({
    value: "",
    label: "",
  });
  const [zipCode, setZipCode] = useState("");
  const [type, setType] = useState("general");
  const editAddress = useRef();
  async function handleUpdateAddress(e) {
    e.preventDefault();
    try {
      const updatedAddress = {
        street,
        number,
        neighborhood,
        complement,
        city,
        state: state.label,
        zipCode,
        type,
      };
      street === "" && delete updatedAddress.street;
      number === "" && delete updatedAddress.number;
      neighborhood === "" && delete updatedAddress.neighborhood;
      state.label === "" && delete updatedAddress.state;
      complement === "" && (updatedAddress.complement = null);
      city === "" && delete updatedAddress.city;
      zipCode === "" && delete updatedAddress.zipCode;
      Object.assign(address, updatedAddress);
      await api.put(`/addresses/${address.id}`, address);
      setUpdateAddress(address);
      reset();
    } catch (e) {
      if (e.response) {
        alert(e.response.data.message);
      }
    }
  }
  function reset() {
    setAddress({});
    setOpenEditAddress(false);
  }
  async function showAddress() {
    const res = await api.get(`/addresses/${addressId}`);
    setAddress(res.data);
    setType(res.data.type);
    setState({ value: res.data.state.toLowerCase(), label: res.data.state });
  }

  return (
    <Container className="address-actions" data-open={openAddressButtons}>
      <div className="remove-edit">
        {!selectedAddress && (
          <IconButton
            disabled={!openAddressButtons}
            content="Remover"
            icon={TbTrash}
            title="Clique para remover"
            id="removeButton"
            onClick={removeAddress}
          />
        )}
        <IconButton
          onClick={() => {
            editAddress.current.focus();
            setOpenEditAddress(true);

            showAddress();
          }}
          disabled={!openAddressButtons}
          content="Editar"
          icon={FaEdit}
          id="editButton"
          title="Clique para editar"
        />
      </div>
      <div
        className="edit-address"
        data-open={openEditAddress}
        tabIndex={openEditAddress ? 0 : -1}
        ref={editAddress}
      >
        <h3>Editar Endereço</h3>
        {Object.keys(address).length > 0 && (
          <AddressForm
            onSubmit={handleUpdateAddress}
            reset={reset}
            disabled={!openAddressButtons}
            address={address}
            setStreet={setStreet}
            setNumber={setNumber}
            setComplement={setComplement}
            setNeighborhood={setNeighborhood}
            setCity={setCity}
            state={state}
            setState={setState}
            type={type}
            setType={setType}
            setZipCode={setZipCode}
          />
        )}
      </div>
    </Container>
  );
}
