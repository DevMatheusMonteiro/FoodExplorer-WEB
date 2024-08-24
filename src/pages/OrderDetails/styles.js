import styled from "styled-components";
export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: max-content 2fr max-content;
  > main {
    grid-area: main;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 4rem;
    > #go-back {
      font-size: 2.4rem;
      display: flex;
      align-items: center;
    }
    > .amount {
      margin-top: 1.4rem;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.MINT._100};
      font-weight: bold;
    }
    > .status-created {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.4rem;
      > .status {
        margin-top: 2.4rem;
        display: flex;
        align-items: center;
        gap: 4px;
        text-transform: capitalize;
        > .coloredBall {
          border-radius: 50%;
          width: 10px;
          height: 10px;
        }
        > .received {
          background-color: ${({ theme }) => theme.COLORS.CAKE._200};
        }
        > .preparing {
          background-color: ${({ theme }) => theme.COLORS.CAKE._100};
        }
        > .delivering {
          background-color: ${({ theme }) => theme.COLORS.CARROT._100};
        }
        > .delivered {
          background-color: ${({ theme }) => theme.COLORS.MINT._100};
        }
        > .canceled {
          background-color: ${({ theme }) => theme.COLORS.TOMATO._200};
        }
      }
      .created {
        align-self: flex-end;
        text-align: center;
      }
    }
    > .products {
      margin-top: 2.4rem;
      > h3 {
        font-size: 2.4rem;
      }
      > div {
        margin-top: 2.4rem;
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;
        gap: 1.6rem;
        > .product {
          background-color: ${({ theme }) => theme.COLORS.DARK._700};
          border: 1px solid ${({ theme }) => theme.COLORS.LIGHT._700};
          border-radius: 0.8rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          align-items: center;
          width: 100%;
          max-width: 280px;
          height: 280px;
          padding: 1rem;
          > .product-image {
            width: 100%;
            max-width: 120px;
            border-radius: 50%;
            aspect-ratio: 1/1;
            object-fit: cover;
          }
          > .product-name {
            text-align: center;
            font-weight: bold;
            font-size: 2.4rem;
          }
          > .product-price {
            font-size: 2rem;
            color: ${({ theme }) => theme.COLORS.CAKE._200};
          }
          > .product-quantity {
            font-size: 1.6rem;
          }
          > .product-description {
            text-align: center;
            font-size: 1.6rem;
            color: ${({ theme }) => theme.COLORS.LIGHT._500};
          }
        }
        @media screen and (min-width: 700px) {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          .product + .product {
            margin-top: 0;
          }
        }
      }
    }
    > .address {
      margin-top: 2.4rem;
      > h3 {
        font-size: 2.4rem;
      }
      font-size: 2rem;
      line-height: 1.5;
    }
  }
`;
