import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-columns: 1fr;
  grid-template-rows: max-content 2fr max-content;
  margin: 0 auto;
  min-height: 100vh;
`;

export const Main = styled.main`
  grid-area: main;
  margin: 0 auto;
  padding: 0 4rem;
  padding-bottom: 4rem;
  width: 100%;
  max-width: 1300px;

  .favorite-slide {
    border-top: 1px solid ${({ theme }) => theme.COLORS.DARK._1000};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK._1000};
    padding: 2.4rem 0;
  }

  .favorite-slide + .category-slide {
    margin-top: 8rem;
  }

  .category-slide + .category-slide {
    margin-top: 2.4rem;
  }
`;

export const Banner = styled.section`
  grid-area: banner;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: "image  title-paragraph";
  height: 150px;
  position: relative;
  margin: 8rem 0;

  .image {
    grid-area: image;
    position: relative;
    height: 120%;
    top: -30px;
    left: -40px;
    overflow: hidden;
    aspect-ratio: 9/6;

    img {
      position: absolute;
      object-fit: cover;
      width: 100%;
    }
  }

  .title-paragraph {
    grid-area: title-paragraph;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    z-index: 1;

    h3 {
      font-size: 2rem;

      margin-bottom: 0.4rem;
    }

    p {
      color: ${({ theme }) => theme.COLORS.LIGHT._400};
    }
  }

  @media (min-width: 400px) {
    .title-paragraph {
      h3 {
        font-size: 2.4rem;
        margin-bottom: 0.4rem;
      }

      p {
        font-size: 1.6rem;
        word-spacing: -3px;
      }
    }
  }

  @media (min-width: 700px) {
    .title-paragraph {
      h3 {
        font-size: 3.2rem;
        margin-bottom: 0.4rem;
      }

      p {
        font-size: 2.4rem;
      }
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: ${({ theme }) => theme.GRADIENTS.GRADIENT_200.BG_GRADIENT};
    background: ${({ theme }) => theme.GRADIENTS.GRADIENT_200.GRADIENT};
  }
`;
