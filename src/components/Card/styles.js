import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: grid;
  place-content: center;
  place-items: center;
  gap: 0.8rem;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, max-content);

  background-color: ${({ theme }) => theme.COLORS.DARK._200};
  border-radius: 0.8rem;
  height: 380px;
  padding: 2.4rem;
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: 2rem;

  -webkit-box-shadow: inset 0px 0px 8px 0px
    ${({ theme }) => theme.COLORS.DARK._800};
  -moz-box-shadow: inset 0px 0px 8px 0px
    ${({ theme }) => theme.COLORS.DARK._800};
  box-shadow: inset 0px 0px 8px 0px ${({ theme }) => theme.COLORS.DARK._800};

  > .icon-button {
    position: absolute;
    top: 12px;
    right: 12px;
    font-size: 2.8rem;
    color: ${({ $isFavorite, theme }) =>
      $isFavorite ? `${theme.COLORS.TOMATO._300}` : null};

    @media (min-width: 900px) {
      font-size: 3.2rem;
    }
  }

  img {
    width: 100%;
    max-width: 100px;
    object-fit: cover;
    border-radius: 50%;
    aspect-ratio: 1/1;

    @media (min-width: 400px) {
      max-width: 124px;
    }

    @media (min-width: 900px) {
      max-width: 140px;
    }
  }

  > a {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-weight: 600;
    text-align: center;
    border-radius: 0.8rem;
    word-spacing: -1.5px;

    > svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.CAKE._100};
    }

    &:focus {
      outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT._200};
    }
  }

  small {
    text-align: center;
    font-size: 1rem;
    letter-spacing: 0.5px;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.LIGHT._700};
    display: none;

    @media (min-width: 900px) {
      display: block;
    }
  }

  .price {
    color: ${({ theme }) => theme.COLORS.CAKE._200};
  }

  > .quantity-button {
    width: 100%;
    margin-top: 1.2rem;
    max-width: 200px;

    > .quantity-container {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4.8rem;

      > button {
        font-size: 2rem;
      }

      > .quantity {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.6rem;
      }
    }

    > button {
      margin-top: 1.2rem;
      height: 4rem;
    }

    @media (min-width: 900px) {
      display: flex;
      align-items: center;

      gap: 1.2rem;

      > button {
        margin-top: 0;
      }
    }
  }
`;
