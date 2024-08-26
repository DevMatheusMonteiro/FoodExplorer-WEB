import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 1.6rem;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT._700};
  color: ${({ theme }) => theme.COLORS.LIGHT._300};
  .status {
    display: flex;
    gap: 2px;
    align-items: center;
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
  > .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;
    > .created {
      text-align: center;
    }
  }
  > .products {
    margin-top: 2.4rem;
  }
  > .container-button {
    margin-top: 2.4rem;
    display: flex;
    justify-content: center;
    gap: 4rem;
    > button {
      max-width: max-content;
      height: max-content;
      background-color: transparent;
    }
    > #viewDetails {
      color: ${({ theme }) => theme.COLORS.CARROT._100};
    }
    > #cancelButton {
      color: ${({ theme }) => theme.COLORS.TOMATO._300};
    }
  }
  .select-details-container {
    margin-top: 2.4rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    > #viewDetails {
      max-width: max-content;
      height: max-content;
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.CARROT._100};
    }
    > .select-container {
      max-width: 152px;

      .options-list {
        overflow: auto;
        max-height: 100px;
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
  }
`;
