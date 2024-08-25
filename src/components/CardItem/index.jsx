import { Container } from "./styles";
import { IconButton } from "../IconButton";
import { FaEllipsisV } from "react-icons/fa";
import { CardActions } from "../CardActions";
import { useState } from "react";

export function CardItem({
  card,
  disabled,
  selected,
  setSelected,
  setUpdateCards,
}) {
  const [openCardActions, setOpenCardActions] = useState();
  return (
    <Container disabled={disabled}>
      <button
        className="card-button"
        onClick={() =>
          selected !== card.id ? setSelected(card.id) : setSelected(null)
        }
        data-select={selected === card.id}
      >
        <p className="nickname">{card.nickname}</p>
        <p className="number">
          {card.number.substring(card.number.length, card.number.length - 4)}
        </p>
      </button>
      <IconButton
        icon={FaEllipsisV}
        title="Clique para editar ou remover"
        className="update"
        onClick={() => {
          openCardActions
            ? setOpenCardActions(false)
            : setOpenCardActions(true);
        }}
      />
      <CardActions
        setUpdateCard={setUpdateCards}
        cardId={card.id}
        openCardActions={openCardActions}
        setOpenCardActions={setOpenCardActions}
      />
    </Container>
  );
}
