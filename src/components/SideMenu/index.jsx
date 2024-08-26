import { Container } from "./styles";

import { FaUser, FaX } from "react-icons/fa6";
import { FaHistory, FaSearch, FaSignOutAlt } from "react-icons/fa";

import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { Input } from "../Input";
import { Footer } from "../Footer";
import { Select } from "../Select";

import { useAuth } from "../../hooks/authContext";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IoFastFood } from "react-icons/io5";

export function SideMenu({
  appear = false,
  setAppear,
  onClick,
  options,
  search,
  setSearch,
  selectedOption = "",
  setSelectedOption,
}) {
  const container = useRef();
  const navigate = useNavigate();
  const { role, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  window.onresize = () => {
    if (appear) {
      screen.width >= 1000 && setAppear(false);
    }
  };

  useEffect(() => {
    if (appear) {
      container.current?.querySelector(".header").focus();
      const footer = container.current?.querySelector("footer");
      footer.onkeydown = (e) => {
        e.key === "Tab" &&
          !e.shiftKey &&
          container.current?.querySelector("#close").click();
      };
      const parent = container.current?.parentNode;

      parent.style = "overflow:hidden;height: 100vh;";
    } else {
      const parent = container.current?.parentNode;

      parent.style = "overflow:visible;min-height: 100vh;";
    }
  }, [appear]);

  return (
    <Container data-appear={appear} ref={container}>
      <div tabIndex="-1" className="header">
        <div>
          <IconButton id="close" onClick={onClick} icon={FaX} />
          <h2>Menu</h2>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        <Input
          id="sideMenuSearch"
          className="input-container"
          description="Busque por pratos ou ingredientes"
          srOnly
          icon={FaSearch}
          placeholder="Busque por pratos ou ingredientes"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select
          srOnly
          options={options}
          id="category-select"
          defaultOption="Filtre por categoria"
          label="Categoria"
          name="category"
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </form>

      <ul>
        <li>
          <Button
            icon={FaHistory}
            content="Histórico de Pedidos"
            onClick={() => {
              navigate("/orderHistory");
              setAppear(false);
            }}
          />
        </li>
        {["admin", "employee"].includes(role) && (
          <li>
            <Button
              icon={IoFastFood}
              content="Novo Prato"
              onClick={() => {
                navigate("/create-product");
                setAppear(false);
              }}
            />
          </li>
        )}
        <li>
          <Button
            icon={FaUser}
            content="Perfil"
            onClick={() => {
              navigate("/profile");
              setAppear(false);
            }}
          />
        </li>
        <li>
          <Button icon={FaSignOutAlt} onClick={handleSignOut} content="Sair" />
        </li>
      </ul>

      <Footer tabIndex="0" />
    </Container>
  );
}
