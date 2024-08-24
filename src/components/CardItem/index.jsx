import { Container } from "./styles";
import { IconButton } from "../IconButton";
import { FaEllipsisV } from "react-icons/fa";

export function CardItem({
  card,
  setCardId,
  disabled,
  selected,
  setSelected,
  setOpenCardActions,
}) {
  return (
    <Container disabled={disabled}>
      <button
        className="card-button"
        onClick={() =>
          selected !== card.id ? setSelected(card.id) : setSelected()
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
          setCardId(card.id);
          setOpenCardActions((prevState) => {
            if (prevState) {
              setOpenCardActions(false);
              setTimeout(() => setOpenCardActions(true), 300);
              return;
            }

            return true;
          });
        }}
      />
    </Container>
  );
}
