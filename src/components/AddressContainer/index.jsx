import { FaPlus, FaSearch } from "react-icons/fa";
import { AddAddress } from "../AddAddress";
import { Button } from "../Button";
import { Container } from "./styles";
import { AddressItem } from "../AddressItem";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Input } from "../Input";
export function AddressContainer({
  page,
  setPage,
  addresses,
  setAddresses,
  selectedAddress,
  setSelectedAddress,
  searchAddress,
  setSearchAddress,
}) {
  const [updatedAddress, setUpdatedAddress] = useState({});
  const [openAddAddress, setOpenAddAddress] = useState(false);
  async function fetchAddresses() {
    const res = await api.get(`addresses?search=${searchAddress}`);
    setAddresses(res.data);
    const selectedAddress = res.data.find((data) => data.selected == 1);
    if (!!selectedAddress) {
      setSelectedAddress(selectedAddress.id);
    }
  }
  async function updateSelected(id) {
    const res = await api.patch(`addresses/${id}`);
    setSelectedAddress(res.data.id);
  }
  async function removeAddress(id) {
    const filteredAddresses = addresses.filter((address) => address.id !== id);
    await api.delete(`addresses/${id}`);
    setAddresses(filteredAddresses);
  }
  useEffect(() => {
    fetchAddresses();
  }, [searchAddress, updatedAddress, selectedAddress]);
  return (
    <Container data-page={page} className="addressContainer">
      <h2>Endereço</h2>
      <div className="search-add-container">
        <Input
          id="searchAddress"
          disabled={page != null && page != 2}
          srOnly
          icon={FaSearch}
          description="Pesquise por rua ou número"
          placeholder="Pesquise por rua ou número"
          value={searchAddress}
          onChange={(e) => setSearchAddress(e.target.value)}
        />
        <Button
          disabled={page != null && page != 2}
          onClick={() => {
            setOpenAddAddress(true);
          }}
          content="Novo"
          icon={FaPlus}
          title="Clique para adicionar novo endereço"
        />
        <AddAddress
          setUpdatedAddress={setUpdatedAddress}
          openAddAddress={openAddAddress}
          setOpenAddAddress={setOpenAddAddress}
        />
      </div>
      <ul className="addresses-list">
        {addresses?.length > 0 &&
          addresses.map((address) => {
            if (address) {
              return (
                <li key={address.id}>
                  <AddressItem
                    disabled={page != null && page != 2}
                    setUpdatedAddress={setUpdatedAddress}
                    address={address}
                    selectedAddress={address.id === selectedAddress}
                    updateSelected={updateSelected}
                    removeAddress={removeAddress}
                  />
                </li>
              );
            }
          })}
        {addresses.length === 0 && <li>Nenhum endereço encontrado</li>}
      </ul>

      <div className="container-page-buttons">
        <Button
          disabled={page != null && page != 2}
          onClick={() => {
            setPage(1);
          }}
          className="goBack"
          content="Voltar"
          title="Clique para Voltar"
        />
        <Button
          disabled={page != null && page != 2}
          onClick={() => {
            setPage(3);
          }}
          className="goForward"
          content="Avançar"
          title="Clique para Avançar"
        />
      </div>
    </Container>
  );
}
