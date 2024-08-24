import { Container } from "./styles";

export function Input({
  icon: Icon,
  id,
  description,
  srOnly = false,
  error = false,
  ...rest
}) {
  return (
    <Container className="input-container">
      <label data-sronly={srOnly} htmlFor={id}>
        {description}
      </label>
      <div className="inputContainer">
        {Icon && <Icon size={20} />}
        <input data-error={error} id={id} {...rest} />
      </div>
    </Container>
  );
}
