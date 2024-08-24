import { Container } from "./styles";

import { FaPlus, FaSearch } from "react-icons/fa";
import { AddCard } from "../AddCard";
import { CardItem } from "../CardItem";
import { Input } from "../Input";
import { Button } from "../Button";
import { useRef, useState } from "react";
import { CardActions } from "../CardActions";

export function CardContainer({
  cards,
  setSearchCards,
  active,
  disabled,
  setUpdateCards,
  type,
}) {
  const [openAddCard, setOpenAddCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState();
  const [openCardActions, setOpenCardActions] = useState();

  const [cardId, setCardId] = useState();

  const addCard = useRef();

  return (
    <Container data-active={active}>
      <div className="search-newCardButton">
        <Input
          description="Pesquise pelo apelido do cartão"
          srOnly
          icon={FaSearch}
          id="searchCard"
          onChange={(e) => setSearchCards(e.target.value)}
          placeholder="Pesquise pelo apelido do cartão"
        />

        <Button
          content="Novo Cartão"
          icon={FaPlus}
          className="newCardButton"
          onClick={() => {
            setOpenAddCard(true);
            addCard.current.focus();
          }}
        />
      </div>

      <ul className="card-list">
        {cards.length > 0 &&
          cards.map((card) => (
            <li key={card.id}>
              <CardItem
                setOpenCardActions={setOpenCardActions}
                card={card}
                setCardId={setCardId}
                disabled={disabled}
                selected={selectedCard}
                setSelected={setSelectedCard}
              />
            </li>
          ))}
      </ul>

      <AddCard
        type={type}
        setUpdateCard={setUpdateCards}
        addCardContainer={addCard}
        open={openAddCard}
        setOpen={setOpenAddCard}
      />

      <CardActions
        setUpdateCard={setUpdateCards}
        cardId={cardId}
        openCardActions={openCardActions}
        setOpenCardActions={setOpenCardActions}
      />
    </Container>
  );
}
