import {
  BiChevronLeft,
  BiChevronRight,
  BiChevronsLeft,
  BiChevronsRight,
} from "react-icons/bi";
import { Container } from "./styles";
import { IconButton } from "../IconButton";
export function PaginationButtons({
  page,
  handleFirstPage,
  handlePreviousPage,
  handleNextPage,
  handleLastPage,
  collection,
  total,
}) {
  return (
    <Container className="paginationButtons">
      <small className="total">
        Página {page}
        <br />
        Mostrando {collection.length} de {total}
      </small>
      <div className="buttonPages">
        <IconButton
          disabled={page == 1}
          onClick={handleFirstPage}
          icon={BiChevronsLeft}
          title="Ir para a primeira página"
        />
        <IconButton
          disabled={page == 1}
          onClick={handlePreviousPage}
          icon={BiChevronLeft}
          title="Voltar uma página"
        />
        <IconButton
          disabled={page == Math.ceil(total / 5)}
          onClick={handleNextPage}
          icon={BiChevronRight}
          title="Avançar uma página"
        />
        <IconButton
          disabled={page == Math.ceil(total / 5)}
          onClick={handleLastPage}
          icon={BiChevronsRight}
          title="Ir para a última página"
        />
      </div>
    </Container>
  );
}
