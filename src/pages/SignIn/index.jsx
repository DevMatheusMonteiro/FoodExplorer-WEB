import foodExplorer from "../../assets/foodExplorer.svg";

import { Container } from "./styles";

import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { useAuth } from "../../hooks/authContext";

import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn(e) {
    e.preventDefault();

    signIn({ email, password });
  }

  return (
    <Container>
      <img
        src={foodExplorer}
        alt="Logo Food Explorer"
        title="Logo Food Explorer"
      />

      <form onSubmit={handleSignIn} method="post">
        <legend>Faça Login</legend>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          id="loginEmail"
          type="email"
          description="Email"
          icon={FaEnvelope}
          placeholder="exemplo@exemplo.com.br"
          required
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          id="loginPassword"
          type="password"
          description="Senha"
          icon={FaLock}
          // minLength="6"
          placeholder="No mínimo 6 caracteres"
          required
        />

        <Button title="Clique para entrar em sua conta" content="Entrar" />
        <Link
          title="Clique para ir à página de registro de conta"
          to="/register"
        >
          Criar uma conta
        </Link>
      </form>
    </Container>
  );
}
