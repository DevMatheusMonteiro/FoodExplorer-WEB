import { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { Container } from "./styles";
import { Input } from "../Input";
import { api } from "../../services/api";
import { IconButton } from "../IconButton";
import { TbTrash } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";

export function CardActions({
  cardId,
  setUpdateCard,
  openCardActions = false,
}) {
  const [openForm, setOpenForm] = useState(false);
  const [nickname, setNickname] = useState("");
  const updateCardContainer = useRef();
  async function handleUpdateCard(e) {
    e.preventDefault();
    try {
      if (nickname === "") return;
      await api.put(`/cards/${cardId}`, { nickname });
      setUpdateCard(nickname);
      setOpenForm(false);
    } catch (e) {
      if (e.response.data) {
        alert(e.response.data.message);
      } else {
        alert("Não foi possível atualizar o cartão");
      }
    }
  }
  async function showCard() {
    const res = await api.get(`/cards/${cardId}`);
    setOpenForm(true);
    setNickname(res.data.nickname);
    updateCardContainer.current.focus();
  }
  async function handleRemoveCard() {
    await api.delete(`/cards/${cardId}`);
    setUpdateCard(cardId);
  }
  useEffect(() => {
    if (!openCardActions) setOpenForm(false);
  }, [openCardActions]);
  return (
    <Container data-open={openCardActions}>
      <div className="remove-update">
        <IconButton
          id="removeCard"
          title="Clique para remover"
          icon={TbTrash}
          disabled={!openCardActions}
          onClick={handleRemoveCard}
        />
        <IconButton
          id="editCard"
          title="Clique para editar"
          icon={FaEdit}
          onClick={() => showCard()}
          disabled={!openCardActions}
        />
      </div>

      <form
        className="update-form"
        data-open={openForm}
        onSubmit={(e) => handleUpdateCard(e)}
        tabIndex={openForm ? 0 : -1}
        ref={updateCardContainer}
      >
        <div className="container">
          <Input
            onChange={(e) => setNickname(e.target.value)}
            disabled={!openForm}
            description="Apelido do cartão"
            id="nickname"
            placeholder="Meu Cartão"
            value={nickname}
          />
          <div className="container-buttons">
            <Button
              type="button"
              disabled={!openForm}
              className="cancel"
              content="Cancelar"
              title="Clique para cancelar"
              onClick={() => setOpenForm(false)}
            />
            <Button
              disabled={!openForm}
              className="registerCard"
              content="Salvar"
              title="Clique para cadastrar o cartão"
            />
          </div>
        </div>
      </form>
    </Container>
  );
}
