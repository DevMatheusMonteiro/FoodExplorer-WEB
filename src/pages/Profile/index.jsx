import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useAuth } from "../../hooks/authContext";
import { useState } from "react";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
export function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  async function handleUpdate(e) {
    e.preventDefault();
    const updateUser = {
      name: name.trim() == "" ? user.name : name,
      email: email.trim() == "" ? user.email : email,
      password: newPassword.trim() == "" ? null : newPassword,
      currentPassword: currentPassword.trim() == "" ? null : currentPassword,
    };

    Object.assign(user, updateUser);
    await updateProfile(user);
  }
  return (
    <Container>
      <Header />
      <main>
        <Link to={"/"} id="home-link">
          Home
        </Link>
        <form method="put" onSubmit={(e) => handleUpdate(e)}>
          <legend>Atualize seu perfil</legend>
          <Input
            onChange={(e) => setName(e.target.value)}
            id="updateName"
            defaultValue={name}
            type="text"
            description="Seu nome"
            icon={FaUser}
            placeholder="Arthur Antunes Coimbra"
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            id="updateEmail"
            defaultValue={email}
            type="email"
            description="Email"
            icon={FaEnvelope}
            placeholder="exemplo@exemplo.com.br"
          />
          <Input
            onChange={(e) => setNewPassword(e.target.value)}
            id="updateNewPassword"
            type="password"
            description="Nova Senha"
            icon={FaLock}
            minLength="6"
            placeholder="No mínimo 6 caracteres"
          />
          <Input
            onChange={(e) => setCurrentPassword(e.target.value)}
            id="updateCurrentPassword"
            type="password"
            description="Senha Atual"
            icon={FaLock}
            minLength="6"
            placeholder="No mínimo 6 caracteres"
            required={newPassword != ""}
          />
          <Button
            title="Clique para atualizar sua conta"
            content="Atualizar Conta"
          />
        </form>
      </main>
      <Footer />
    </Container>
  );
}
