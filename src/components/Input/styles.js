import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;

  > label {
    &[data-sronly="true"] {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    color: ${({ theme }) => `${theme.COLORS.LIGHT._400}`};
  }

  &:has(input:focus) {
    > label {
      color: ${({ theme }) => `${theme.COLORS.CAKE._200}`};
    }
  }

  > .inputContainer {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    border-radius: 0.8rem;
    padding: 0 1.2rem;
    height: 4rem;
    background-color: ${({ theme }) => `${theme.COLORS.DARK._900}`};

    &:has(input[data-error="true"]) {
      outline: ${({ theme }) => `1px solid ${theme.COLORS.TOMATO._200}`};
    }

    &:has(input:focus) {
      outline: ${({ theme }) => `1px solid ${theme.COLORS.LIGHT._500}`};
    }

    > input {
      width: 100%;
      background-color: transparent;
      border: none;
      outline: none;

      &::placeholder {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT._500};

        @media (min-width: 1000px) {
          font-size: 1.6rem;
        }
      }
    }

    > svg {
      color: ${({ theme }) => `${theme.COLORS.LIGHT._700}`};
      font-size: 1.6rem;
    }
  }
`;
