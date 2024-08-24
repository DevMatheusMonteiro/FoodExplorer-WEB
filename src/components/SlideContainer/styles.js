import styled from "styled-components";

import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  > h2 {
    font-weight: normal;
    margin-bottom: 2rem;
  }
`;

export const Slide = styled(Swiper)`
  width: 100%;

  .swiper-button-prev::after,
  .swiper-button-next::after {
    display: none;
    color: ${({ theme }) => theme.COLORS.CAKE._200};

    @media (min-width: 900px) {
      display: block;
    }
  }
`;
