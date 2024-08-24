import { Container } from "./styles";

export function Button({ title, content, icon: Icon, ...rest }) {
  return (
    <Container title={title} {...rest}>
      {Icon && <Icon />}
      {content}
    </Container>
  );
}
