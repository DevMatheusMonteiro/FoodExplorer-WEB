import { Container } from "./styles";

import { FaPlus, FaSearch } from "react-icons/fa";
import { AddCard } from "../AddCard";
import { CardItem } from "../CardItem";
import { Input } from "../Input";
import { Button } from "../Button";
import { useRef, useState } from "react";

export function CardContainer({
  cards,
  searchCards,
  setSearchCards,
  active,
  disabled,
  setUpdateCards,
  type,
}) {
  const [openAddCard, setOpenAddCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState();

  const [cardId, setCardId] = useState();

  const addCard = useRef();

  return (
    <Container data-active={active}>
      <div className="search-newCardButton">
        <Input
          value={searchCards}
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
                card={card}
                disabled={disabled}
                selected={selectedCard}
                setSelected={setSelectedCard}
                setUpdateCards={setUpdateCards}
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
    </Container>
  );
}
