import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "header" "main" "footer";
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr max-content;
  main {
    grid-area: main;
    padding: 4rem;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    > #home-link {
      display: inline-block;
      margin-bottom: 4rem;
      font-weight: bold;
      text-transform: uppercase;
    }
    > #home-link:focus {
      outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT._100};
      border-radius: 2px;
    }
    > .empty {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
      font-size: 4rem;
      text-align: center;
      > svg {
        font-size: 6rem;
      }
    }
    > .mobile-container {
      > .shoppingBagContainer {
        &[data-page="2"] {
          transform: translateX(-1000vw);
          position: fixed;
        }
        &[data-page="3"] {
          display: none;
        }
        transition: transform 0.3s ease-in-out;
      }
      > .addressContainer {
        &[data-page="1"] {
          transform: translateX(1000vw);
          top: 200px;

          width: 100%;
          position: fixed;
        }

        &[data-page="3"] {
          transform: translateX(-1000vw);
          top: 200px;

          width: 100%;
          position: fixed;
        }
        transition: 0.3s ease-in-out;
      }
      .paymentMethodContainer {
        &[data-page="2"] {
          transform: translateX(1000vw);
          top: 200px;

          width: 100%;
          position: fixed;
        }
        &[data-page="1"] {
          display: none;
        }
        transition: 0.3s ease-in-out;
      }
      @media (min-width: 1000px) {
        display: none;
      }
    }
    > .desktop-container {
      display: none;
    }
    @media (min-width: 1000px) {
      > .desktop-container {
        display: grid;
        grid-template-areas:
          "bag payment"
          "address payment";
        grid-template-columns: 1fr 1fr;
        column-gap: 8rem;
        row-gap: 4rem;
        > .shoppingBagContainer {
          grid-area: bag;
        }
        > .addressContainer {
          grid-area: address;
        }
        .paymentMethodContainer {
          grid-area: payment;
        }
      }
    }
  }
`;
