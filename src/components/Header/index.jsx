import { Container } from "./styles";

import {
  FaBars,
  FaHistory,
  FaSearch,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { PiReceipt } from "react-icons/pi";
import foodExplorer from "../../assets/foodExplorer.svg";

import { IconButton } from "../IconButton";
import { SideMenu } from "../SideMenu";
import { Input } from "../Input";
import { Select } from "../Select";

import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/authContext";

import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";
import { IoFastFood } from "react-icons/io5";

export function Header({ setData, orders }) {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [appear, setAppear] = useState(false);

  const [search, setSearch] = useState("");

  const [selectedOption, setSelectedOption] = useState({
    value: "",
    label: "",
  });

  const [options, setOptions] = useState([]);

  const navigate = useNavigate();

  const { signOut, role, user } = useAuth();
  const firstName = user.name.split(" ")[0];
  const lastName =
    user.name.split(" ").length == 1
      ? ""
      : user.name.split(" ")[user.name.split(" ").length - 1];
  function onChangeAppear() {
    appear ? setAppear(false) : setAppear(true);
  }

  async function fetchProducts() {
    const localStorageData = JSON.parse(
      localStorage.getItem("@foodExplorer:products")
    );
    const res = await api.get(
      `/products?search=${search}&category=${selectedOption.label}`
    );
    let quantityAdded;

    quantityAdded = res.data.map((data) => {
      const productWithQuantity = data.products.map((product) => {
        return { ...product, quantity: 1 };
      });

      return { id: data.id, name: data.name, products: productWithQuantity };
    });

    if (!localStorageData) {
      localStorage.setItem(
        "@foodExplorer:products",
        JSON.stringify(quantityAdded)
      );
    }

    setData && setData(quantityAdded);
  }

  async function fetchCategories() {
    const res = await api.get("/categories");

    const categories = res.data.map((data) => data.name);

    const options = categories.map((category) => {
      return {
        value: category.toLowerCase().split(" ").join(""),
        label: category,
      };
    });

    setOptions(options);
  }

  useEffect(() => {
    fetchProducts();
    fetchCategories();

    const quantities = [];
    const localStorageOrders = JSON.parse(
      localStorage.getItem("@foodExplorer:orders")
    );

    if (localStorageOrders && !orders) {
      localStorageOrders.forEach((localStorageOrder) => {
        quantities.push(localStorageOrder.quantity);
      });

      setTotalQuantity(() => {
        const totalQuantity = quantities.reduce(
          (prevValue, currentValue) => prevValue + currentValue,
          0
        );

        return totalQuantity;
      });
    } else if (orders && orders.length > 0) {
      orders.forEach((order) => {
        quantities.push(order.quantity);
      });

      setTotalQuantity(() => {
        const totalQuantity = quantities.reduce(
          (prevValue, currentValue) => prevValue + currentValue,
          0
        );

        return totalQuantity;
      });
    }
  }, [search, selectedOption.value, orders]);

  return (
    <>
      <SideMenu
        options={options}
        search={search}
        setSearch={setSearch}
        appear={appear}
        setAppear={setAppear}
        onClick={onChangeAppear}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <Container>
        <div>
          <IconButton
            id="menu"
            onClick={onChangeAppear}
            title="Clique para abrir o menu lateral"
            icon={FaBars}
          />
          {role == "customer" && (
            <img
              src={foodExplorer}
              alt="Logo Food Explorer"
              title="Logo Food Explorer"
            />
          )}
          {["employee", "admin"].includes(role) && (
            <div className="logo-employee">
              <img
                src={foodExplorer}
                alt="Logo Food Explorer"
                title="Logo Food Explorer"
              />
              <small>{`${firstName} ${lastName}`}</small>
            </div>
          )}
          <form onSubmit={(e) => e.preventDefault()}>
            <Input
              description="Busque por pratos ou ingredientes"
              id="headerSearch"
              srOnly
              icon={FaSearch}
              placeholder="Busque por pratos ou ingredientes"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Select
              srOnly
              options={options}
              id="headerSelect"
              label="Categorias"
              name="categories"
              defaultOption="Filtre por categoria"
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </form>
          <div className="buttons-container">
            {role == "customer" && (
              <div className="receipt-container">
                <span>{totalQuantity}</span>
                <IconButton
                  onClick={() => navigate("/orders")}
                  title="Clique para ver seus pedidos"
                  icon={PiReceipt}
                />
              </div>
            )}
            {["admin", "employee"].includes(role) && (
              <IconButton
                icon={IoFastFood}
                onClick={() => navigate("/create-product")}
                title="Clique para criar novo prato"
              />
            )}
            <IconButton
              icon={FaHistory}
              onClick={() => navigate("/orderHistory")}
              title="Clique para ver o histórico de pedidos"
            />
            <IconButton
              icon={FaUser}
              onClick={() => navigate("/profile")}
              title="Clique para editar informações do perfil"
            />
            <IconButton
              icon={FaSignOutAlt}
              onClick={signOut}
              title="Clique para realizar o logout"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
