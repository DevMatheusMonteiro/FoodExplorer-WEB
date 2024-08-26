import { Container } from "./styles";

import {
  FaRegHeart,
  FaHeart,
  FaMinus,
  FaPlus,
  FaChevronRight,
  FaEdit,
} from "react-icons/fa";

import empty from "../../assets/empty.svg";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/authContext";

export function Card({
  data,
  allData,
  setAllData,
  allFavorites,
  setAllFavorites,
  addToBag,
  ...rest
}) {
  const { role } = useAuth();
  const localStorageData = JSON.parse(
    localStorage.getItem("@foodExplorer:products")
  );
  const navigate = useNavigate();

  const localStorageProducts = [];

  if (localStorageData) {
    localStorageData.forEach((localStorageData) => {
      localStorageData.products.forEach((product) =>
        localStorageProducts.push(product)
      );
    });

    localStorageProducts.forEach((product) => {
      if (product.id === data.id) {
        data.quantity = product.quantity;
      }
    });
  }

  const isFavorite = allFavorites.some(
    (favorite) => favorite.product_id === data.id
  );

  function increaseQuantity() {
    if (isFavorite) {
      const [favorite] = allFavorites.filter(
        (favorite) => favorite.product_id === data.id
      );
      const setFavoriteQuantity = allFavorites.map((old) => {
        if (old === favorite) {
          old.product.quantity = old.product.quantity + 1;

          const setDataQuantity = allData.map((data) => {
            data.products.forEach((product) => {
              if (product.id === favorite.product_id) {
                product.quantity = old.product.quantity;
              }
            });

            return data;
          });

          localStorage.setItem(
            "@foodExplorer:products",
            JSON.stringify(setDataQuantity)
          );

          setAllData(setDataQuantity);
        }

        return old;
      });

      setAllFavorites(setFavoriteQuantity);
    } else {
      const setDataQuantity = allData.map((old) => {
        old.products.forEach((product) => {
          if (product.id === data.id) {
            product.quantity = product.quantity + 1;
          }
        });

        return old;
      });

      localStorage.setItem(
        "@foodExplorer:products",
        JSON.stringify(setDataQuantity)
      );

      setAllData(setDataQuantity);
    }
  }

  function decreaseQuantity() {
    if (isFavorite) {
      const [favorite] = allFavorites.filter(
        (favorite) => favorite.product_id === data.id
      );
      const setFavoriteQuantity = allFavorites.map((old) => {
        if (old === favorite) {
          old.product.quantity = old.product.quantity - 1;

          const setDataQuantity = allData.map((data) => {
            data.products.forEach((product) => {
              if (product.id === favorite.product_id) {
                product.quantity = old.product.quantity;
              }
            });

            return data;
          });

          localStorage.setItem(
            "@foodExplorer:products",
            JSON.stringify(setDataQuantity)
          );

          setAllData(setDataQuantity);
        }

        return old;
      });

      setAllFavorites(setFavoriteQuantity);
    } else {
      const setDataQuantity = allData.map((old) => {
        old.products.forEach((product) => {
          if (product.id === data.id) {
            product.quantity = product.quantity - 1;
          }
        });

        return old;
      });

      localStorage.setItem(
        "@foodExplorer:products",
        JSON.stringify(setDataQuantity)
      );

      setAllData(setDataQuantity);
    }
  }

  async function addFavorite() {
    const res = await api.post("/favorites", { product_id: data.id });

    setAllFavorites((prevState) => {
      return [
        ...prevState,
        {
          id: res.data.id,
          quantity: data.quantity,
          product_id: data.id,
          product: data,
        },
      ];
    });
  }

  async function deleteFavorite() {
    allFavorites.forEach(async (favorite) => {
      if (favorite.product.id === data.id) {
        const filteredFavorite = allFavorites.filter(
          (data) => data.id !== favorite.id
        );

        await api.delete(`/favorites/${favorite.id}`);
        setAllFavorites(filteredFavorite);
      }
    });
  }

  function changeFavorite() {
    if (allFavorites.some((favorite) => favorite.product.id === data.id)) {
      deleteFavorite();
    } else {
      addFavorite();
    }
  }

  const image = data.image
    ? `${api.defaults.baseURL}/file/${data.image}`
    : empty;

  return (
    <Container $isFavorite={isFavorite} {...rest}>
      {role == "customer" && (
        <IconButton
          onClick={changeFavorite}
          className="icon-button"
          icon={
            allFavorites.some((favorite) => favorite.product.id === data.id)
              ? FaHeart
              : FaRegHeart
          }
        />
      )}
      {["admin", "employee"].includes(role) && (
        <IconButton
          className="icon-button"
          icon={FaEdit}
          onClick={() => navigate(`/edit-product/${data.id}`)}
        />
      )}
      <img src={image} alt={data.name} />
      <Link to={`/product-details/${data.id}`}>
        {data.name}
        <FaChevronRight />
      </Link>
      {data.description &&
        (data.description.length > 50 ? (
          <small title={data.description}>
            {data.description.substring(0, 50).padEnd(53, ".")}
          </small>
        ) : (
          <small>{data.description}</small>
        ))}
      <p className="price">{`R$ ${data.price.toFixed(2).replace(".", ",")}`}</p>
      <div className="quantity-button">
        {role == "customer" && (
          <>
            <div className="quantity-container">
              <IconButton
                onClick={decreaseQuantity}
                icon={FaMinus}
                disabled={data.quantity === 1}
              />

              <p className="quantity">
                {data.quantity.toString().padStart(2, "0")}
              </p>

              <IconButton onClick={increaseQuantity} icon={FaPlus} />
            </div>

            <Button
              onClick={() => addToBag(data)}
              title="Clique para adicionar o produto na sacola"
              content="Incluir"
            />
          </>
        )}
      </div>
    </Container>
  );
}
