import styled from "styled-components";

export const Container = styled.div`
  border-radius: 0.8rem;
  padding: 0.4rem;

  position: relative;

  &[data-selected="true"] {
    outline: 1px solid ${({ theme }) => theme.COLORS.CAKE._100};
    > button:first-child {
      color: ${({ theme }) => theme.COLORS.CAKE._200};
      opacity: 1;
    }
  }

  &:has(.update-selected-button:focus) {
    outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT._500};
  }

  > .update-selected-button {
    &:disabled {
      cursor: auto;
      filter: none;
    }

    width: 100%;
    background-color: transparent;
    border: 0;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    outline: none;
    min-height: 4rem;

    > svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.CAKE._200};
    }

    > div {
      text-align: left;

      > .complement {
        font-size: 1.2rem;
      }
    }
  }

  .ellipsis-button {
    font-size: 2rem;
    position: absolute;
    right: 4px;
    top: 4px;
  }
`;
