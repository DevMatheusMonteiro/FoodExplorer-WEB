import { Container, Main, Banner } from "./styles";

import banner from "../../assets/banner.png";

import { Header } from "../../components/Header";
import { SlideContainer } from "../../components/SlideContainer";
import { Footer } from "../../components/Footer";

import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Home() {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const [orders, setOrders] = useState([]);

  function addToBag(data) {
    const order = {};

    for (const key in data) {
      if (key === "id") {
        order.product_id = data[key];
      } else {
        order[key] = data[key];
      }
    }

    if (orders.length > 0) {
      if (!!orders.find((product) => product.product_id === data.id)) {
        const newData = [];
        orders.forEach((product) => {
          if (product.product_id === data.id) {
            product = order;
          }

          newData.push(product);
        });

        setOrders(newData);
      } else {
        setOrders((prevState) => [...prevState, order]);
      }
      return;
    }

    setOrders((prevState) => [...prevState, order]);
  }

  async function fetchFavorites() {
    const res = await api.get(`/favorites`);

    const quantityAdded = res.data.map((data) => {
      Object.assign(data.product, { quantity: 1 });

      return { ...data };
    });

    setFavorites(quantityAdded);
  }

  useEffect(() => {
    fetchFavorites();

    const localStorageOrders = JSON.parse(
      localStorage.getItem("@foodExplorer:orders")
    );

    if (localStorageOrders && orders.length === 0) {
      setOrders(localStorageOrders);
    }

    orders.length > 0 &&
      localStorage.setItem("@foodExplorer:orders", JSON.stringify(orders));
  }, [orders]);

  return (
    <Container>
      <Header setData={setData} orders={orders} />
      <Main>
        <Banner>
          <div className="image">
            <img src={banner} alt="Banner" title="Banner" />
          </div>
          <div className="title-paragraph">
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </Banner>
        {favorites.length > 0 && (
          <SlideContainer
            allData={data}
            setAllData={setData}
            title="Favoritos"
            className="favorite-slide"
            favoriteData={favorites}
            favorites={favorites}
            setFavorites={setFavorites}
            addToBag={addToBag}
          />
        )}

        {data.length > 0 &&
          data.map((category) => (
            <SlideContainer
              allData={data}
              setAllData={setData}
              title={category.name}
              className="category-slide"
              data={category}
              key={category.id}
              favorites={favorites}
              setFavorites={setFavorites}
              addToBag={addToBag}
            />
          ))}
      </Main>
      <Footer />
    </Container>
  );
}
