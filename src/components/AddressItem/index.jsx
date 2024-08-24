import { useEffect, useRef, useState } from "react";
import { Container } from "./styles";

import { FaHome, FaCoffee, FaEllipsisV } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";

import { IconButton } from "../IconButton";
import { AddressAction } from "../AddressAction";

export function AddressItem({
  address,
  updateSelected,
  setUpdatedAddress,
  selectedAddress = false,
  disabled,
}) {
  const [openAddressActions, setOpenAddressActions] = useState(false);
  function formatStreet(street) {
    if (street.toLocaleLowerCase().indexOf("rua ") === 0) {
      const rest = street.substring("rua ".length, street.length);

      return `R. ${rest}`;
    }

    if (street.toLocaleLowerCase().indexOf("avenida ") === 0) {
      const rest = street.substring("avenida ".length, street.length);

      return `Av. ${rest}`;
    }

    return street;
  }
  function formatComplement(complement) {
    if (complement.length > 10) {
      return complement.substring(0, 10).padEnd(13, ".");
    }
    return complement;
  }
  function toggleAddressActionsButtons() {
    if (openAddressActions) {
      setOpenAddressActions(false);
    } else {
      setOpenAddressActions(true);
    }
  }
  useEffect(() => {
    setOpenAddressActions(false);
  }, [selectedAddress]);
  return (
    <Container data-selected={selectedAddress}>
      <button
        disabled={selectedAddress || disabled}
        onClick={() => updateSelected(address.id)}
        className="update-selected-button"
      >
        {address.type === "home" ? (
          <FaHome />
        ) : address.type === "work" ? (
          <FaCoffee />
        ) : (
          <FaClockRotateLeft />
        )}

        <div>
          <p className="street-number">{`${formatStreet(address.street)} ${
            address.number
          }`}</p>
          {address.complement && (
            <span className="complement">{`${formatComplement(
              address.complement
            )} `}</span>
          )}
        </div>
      </button>

      <IconButton
        disabled={disabled}
        id={address.id}
        onClick={toggleAddressActionsButtons}
        className="ellipsis-button"
        icon={FaEllipsisV}
        title="Clique para editar ou excluir"
      />
      <AddressAction
        removeAddress={() => removeAddress(addressId)}
        selectedAddress={selectedAddress}
        addressId={address.id}
        openAddressButtons={openAddressActions}
        setUpdateAddress={setUpdatedAddress}
      />
    </Container>
  );
}
