import styled from "styled-components";
export const ViewButton = styled.td`
  padding-block: 1.6rem;
  > button {
    margin: 0 auto;
    max-width: max-content;
    height: max-content;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.CARROT._100};
  }
`;
export const Status = styled.td`
  padding-left: 1.6rem;
  padding-block: 1.6rem;
  > div,
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
  > .select-container {
    max-width: 152px;
  }
`;
export const Code = styled.td`
  text-align: left;
  padding-left: 1.6rem;
  padding-block: 1.6rem;
`;
export const Products = styled.td`
  text-align: left;
  padding-left: 1.6rem;
  padding-block: 1.6rem;
`;
export const DateTime = styled.td`
  text-align: left;
  padding-left: 1.6rem;
  padding-block: 1.6rem;
`;
export const CancelButton = styled.td`
  padding-block: 1.6rem;
  > button {
    margin: 0 auto;
    max-width: max-content;
    height: max-content;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.TOMATO._300};
  }
`;
