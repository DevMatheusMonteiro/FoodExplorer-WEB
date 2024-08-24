import { Container } from "./styles";

export function IconButton({ title, icon: Icon, ...rest }) {
  return (
    <Container type="button" title={title} {...rest}>
      <Icon />
    </Container>
  );
}
