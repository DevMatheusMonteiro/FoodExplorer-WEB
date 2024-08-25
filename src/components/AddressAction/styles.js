import styled from "styled-components";

export const Container = styled.div`
  &[data-open="false"] {
    scale: 0;
  }
  transition: 0.3s ease-in-out;
  outline: 0;
  position: absolute;
  width: max-content;
  padding: 0.8rem;
  right: 0px;
  border-radius: 0.8rem;
  top: -40px;
  z-index: 9999999;
  background: ${({ theme }) => theme.GRADIENTS.GRADIENT_200.BG_GRADIENT};
  background: ${({ theme }) => theme.GRADIENTS.GRADIENT_200.GRADIENT};

  > .remove-edit {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    > button {
      > svg {
        font-size: 2rem;
      }
    }
    > #removeButton {
      color: ${({ theme }) => theme.COLORS.TOMATO._200};
    }
    > #editButton {
      color: ${({ theme }) => theme.COLORS.CARROT._100};
    }
  }

  > .edit-address {
    &[data-open="false"] {
      scale: 0;
    }
    transition: 0.3s ease-in-out;
    position: fixed;
    overflow: auto;
    inset: 0;
    outline: 0;
    background: ${({ theme }) => theme.GRADIENTS.GRADIENT_100.BG_GRADIENT};
    background: ${({ theme }) => theme.GRADIENTS.GRADIENT_100.GRADIENT};
    padding: 4rem;
    padding-top: 8rem;
    > h3 {
      font-size: 2.8rem;
    }
    @media (min-width: 1000px) {
      inset: inherit;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 0.8rem;
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT._700};
      width: 100%;
      max-width: 800px;
    }
  }
`;
