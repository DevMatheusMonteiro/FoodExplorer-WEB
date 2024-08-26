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

    .select-container {
      .options-list {
        overflow: auto;
        max-height: 180px;
        &::-webkit-scrollbar {
          width: 4px;
          height: 4px;
          background-color: ${({ theme }) => theme.COLORS.DARK._100};
          opacity: 0;
        }

        &::-webkit-scrollbar-thumb {
          cursor: pointer;
          border-radius: 0.8rem;
          background-color: ${({ theme }) => theme.COLORS.DARK._900};
        }

        &::-webkit-scrollbar-thumb:hover {
          background-color: ${({ theme }) => theme.COLORS.DARK._1000};
        }
      }
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
      max-width: 150px;
      height: 3.2rem;

      > svg {
        font-size: 2rem;
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
