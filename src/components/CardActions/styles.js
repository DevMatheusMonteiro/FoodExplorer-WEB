import styled from "styled-components";

export const Container = styled.div`
  &[data-open="false"] {
    scale: 0;
  }
  outline: none;
  transition: 0.3s ease-in-out;
  position: absolute;
  bottom: 20px;
  right: 5px;
  padding: 4px;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.GRADIENTS.GRADIENT_200.BG_GRADIENT};
  background: ${({ theme }) => theme.GRADIENTS.GRADIENT_200.GRADIENT};
  > .remove-update {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;

    > button {
      font-size: 2rem;
    }
    > #removeCard {
      color: ${({ theme }) => theme.COLORS.TOMATO._200};
    }
    > #editCard {
      color: ${({ theme }) => theme.COLORS.CARROT._100};
    }
  }

  > button {
    width: max-content;
    height: max-content;
    margin: 0 auto;
    margin-top: 2rem;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.TOMATO._200};
  }

  > .update-form {
    &[data-open="false"] {
      > .container {
        opacity: 0;
      }
      scale: 0;
    }
    outline: none;
    transition: 0.3s ease-in-out;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    position: fixed;
    z-index: 999999;
    > .container {
      max-width: 300px;
      margin: 0 auto;

      background: ${({ theme }) => theme.GRADIENTS.GRADIENT_100.BG_GRADIENT};
      background: ${({ theme }) => theme.GRADIENTS.GRADIENT_100.GRADIENT};
      border: 1px solid ${({ theme }) => theme.COLORS.DARK._1000};
      border-radius: 0.8rem;

      padding: 1.2rem;

      > .container-buttons {
        display: flex;
        gap: 1.2rem;
        justify-content: center;
        margin-top: 2rem;

        > button {
          height: 3.2rem;
          max-width: 100px;
        }
      }
    }
  }
`;
