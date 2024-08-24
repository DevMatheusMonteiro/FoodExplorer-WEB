import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  background: ${({ theme }) => theme.GRADIENTS.GRADIENT_200.BG_GRADIENT};
  background: ${({ theme }) => theme.GRADIENTS.GRADIENT_200.GRADIENT};

  > div {
    padding: 0 2rem;
    max-width: 1300px;
    margin: 0 auto;
    height: 108px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      font-size: 3.2rem;
    }

    img {
      width: 100%;
      max-width: 156px;
    }

    > .logo-employee {
      display: flex;
      flex-direction: column;
      > small {
        align-self: flex-end;
        color: ${({ theme }) => theme.COLORS.CAKE._200};
      }
    }

    > form {
      display: none;
    }

    .buttons-container {
      > button {
        display: none;
      }

      .receipt-container {
        position: relative;

        > span {
          position: absolute;
          top: -8px;
          right: -4px;
          min-width: 1.6rem;
          padding: 0.2rem 0.4rem;
          border-radius: 50%;
          font-size: 1.2rem;
          z-index: 999;

          background-color: ${({ theme }) => theme.COLORS.TOMATO._100};
        }
      }
    }

    @media (min-width: 1000px) {
      img {
        max-width: 200px;
      }

      > form {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.4rem;
        padding: 0 2.4rem;
        z-index: 999999;

        > div {
          .inputContainer,
          .select > .select-button {
            background-color: ${({ theme }) => theme.COLORS.DARK._800};
          }
        }

        > div:nth-child(1) {
          max-width: 500px;
        }

        > div:nth-child(2) {
          max-width: 240px;
        }
      }

      > button {
        display: none;
      }

      .buttons-container {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        > button {
          display: block;

          > svg {
            font-size: 2.8rem;
          }
        }
      }
    }
  }
`;
