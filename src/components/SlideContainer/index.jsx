import { Container, Slide } from "./styles";

import { Card } from "../Card";

import "swiper/css";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export function SlideContainer({
  data,
  allData,
  setAllData,
  favoriteData,
  title,
  favorites,
  setFavorites,
  className,
  addToBag,
}) {
  return (
    <Container className={className}>
      <h2>{title}</h2>
      <Slide
        modules={[Navigation]}
        navigation
        speed={500}
        spaceBetween={10}
        slidesPerView={1.1}
        breakpoints={{
          500: {
            slidesPerView: 2.1,
          },
          900: {
            slidesPerView: 3.1,
          },
        }}
      >
        {data &&
          data.products.map((product) => (
            <SwiperSlide key={product.id}>
              <Card
                data={product}
                allData={allData}
                setAllData={setAllData}
                addToBag={addToBag}
                allFavorites={favorites}
                setAllFavorites={setFavorites}
              />
            </SwiperSlide>
          ))}

        {favoriteData &&
          favoriteData.map((favorite) => (
            <SwiperSlide key={favorite.id}>
              <Card
                data={favorite.product}
                allData={allData}
                setAllData={setAllData}
                addToBag={addToBag}
                allFavorites={favorites}
                setAllFavorites={setFavorites}
              />
            </SwiperSlide>
          ))}
      </Slide>
    </Container>
  );
}
