import styled from "styled-components";

export const Container = styled.form`
  margin-top: 2.4rem;

  .inputs-container + .inputs-container {
    margin-top: 2.4rem;
  }

  > .inputs-container {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    &:nth-last-child(3) {
      flex-wrap: wrap;
    }

    @media (min-width: 400px) {
      &:nth-last-child(3) {
        flex-wrap: nowrap;
      }
    }
  }

  > .type-buttons-container {
    margin-top: 2.4rem;

    display: flex;
    gap: 1.2rem;

    > button {
      background-color: ${({ theme }) => theme.COLORS.CAKE._100};
      max-width: 88px;
      height: 3.2rem;

      svg {
        font-size: 1.4rem;
      }

      &[data-selected="true"] {
        outline: 1px solid ${({ theme }) => theme.COLORS.MINT._100};
      }
    }
  }

  > .buttons-container {
    margin-top: 4rem;

    display: flex;
    justify-content: space-between;
    gap: 1.2rem;
    > button {
      max-width: 200px;
    }
  }
`;
