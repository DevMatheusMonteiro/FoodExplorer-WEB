import foodExplorer from "../../assets/foodExplorer.svg";

import { Container } from "./styles";

import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useState } from "react";
import { useAuth } from "../../hooks/authContext";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useAuth();
  function handleSignUp(e) {
    e.preventDefault();
    signUp({ name, email, password });
  }
  return (
    <Container>
      <img
        src={foodExplorer}
        alt="Logo Food Explorer"
        title="Logo Food Explorer"
      />

      <form onSubmit={handleSignUp} method="post">
        <legend>Crie sua conta</legend>
        <Input
          onChange={(e) => setName(e.target.value)}
          id="registerName"
          type="text"
          description="Seu nome"
          icon={FaUser}
          placeholder="Arthur Antunes Coimbra"
          required
        />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          id="registerEmail"
          type="email"
          description="Email"
          icon={FaEnvelope}
          placeholder="exemplo@exemplo.com.br"
          required
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          id="registerPassword"
          type="password"
          description="Senha"
          icon={FaLock}
          minLength="6"
          placeholder="No mínimo 6 caracteres"
          required
        />

        <Button title="Clique para criar sua conta" content="Criar conta" />
        <Link title="Clique para ir à página de login" to="/">
          Já tenho uma conta
        </Link>
      </form>
    </Container>
  );
}
