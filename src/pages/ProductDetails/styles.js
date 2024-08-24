import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "header" "main" "footer";
  grid-template-columns: 1fr;
  grid-template-rows: max-content 2fr max-content;
  min-height: 100vh;

  main {
    grid-area: main;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    padding: 4rem;
    width: 100%;
    > a {
      font-size: 2rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      border-radius: 0.8rem;
      width: max-content;

      &:focus {
        outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT._100};
      }
    }
    > section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.6rem;
      height: 100%;
      > img {
        width: 100%;
        aspect-ratio: 1/1;
        max-width: 300px;
        object-fit: cover;
        border-radius: 50%;
      }
      > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.2rem;
        > h2 {
          font-size: 3.2rem;
        }
        > p {
          text-align: center;
          color: ${({ theme }) => theme.COLORS.LIGHT._500};
        }
        > ul {
          list-style: none;
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
          gap: 0.8rem;

          > li {
            background-color: ${({ theme }) => theme.COLORS.DARK._1000};
            padding: 0.8rem;
            border-radius: 0.8rem;
          }
        }
        > .quantity-button {
          width: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 1.2rem;
          > .quantity-container {
            position: relative;
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
            max-width: 200px;

            > svg {
              font-size: 2.4rem;
            }
          }

          @media (min-width: 1000px) {
            flex-direction: row;
          }
        }
        > .price {
          color: ${({ theme }) => theme.COLORS.CAKE._200};
          font-size: 2rem;
        }
        > .edit {
          max-width: 200px;

          > svg {
            font-size: 2.4rem;
          }
        }
      }

      @media (min-width: 1000px) {
        flex-direction: row;
        justify-content: space-between;
        gap: 4.4rem;
        max-width: 1024px;
        margin: 0 auto;

        > div {
          align-items: flex-start;

          > p {
            text-align: left;
          }
        }
      }
    }

    @media (min-width: 1000px) {
      max-width: 1300px;
      margin: 0 auto;
    }
  }
`;
