import styled from "styled-components";

export const Container = styled.div`
  &[data-open="false"] {
    transform: translateY(100%);
  }

  padding: 2rem;
  outline: none;
  transition: 0.3s ease-in-out;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 0 0 0.8rem 0.8rem;
  width: 100%;
  background: ${({ theme }) => theme.GRADIENTS.GRADIENT_200.BG_GRADIENT};
  background: ${({ theme }) => theme.GRADIENTS.GRADIENT_200.GRADIENT};

  height: 10rem;

  > .remove-update {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;

    > button {
      max-width: 100px;
      height: 3.2rem;
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
      scale: 0;
    }

    outline: none;
    transition: 0.3s ease-in-out;
    top: 50%;
    transform: translateY(-50%);

    left: 0;

    width: 100%;

    position: fixed;
    z-index: 9999;
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
