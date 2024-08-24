import { Container } from "./styles";

import foodExplorer from "../../assets/foodExplorerFooter.svg";

export function Footer(props) {
  return (
    <Container {...props}>
      <img
        src={foodExplorer}
        alt="Logo Food Explorer"
        title="Logo Food Explorer"
      />
      <p>&copy; 2024 - Todos os direitos reservados.</p>
    </Container>
  );
}
