import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT._700};
  /* overflow: hidden; */
  border-radius: 0.8rem;
  > table {
    width: 100%;
    border-collapse: collapse;
    tr {
      height: 4.8rem;
    }
    > thead {
      > tr {
        > th {
          text-align: left;
          padding-left: 1.6rem;
          padding-block: 1.6rem;
        }
        th:last-child {
          border-right: 0;
        }
      }
    }
    > tbody {
      > tr {
        border-top: 1px solid ${({ theme }) => theme.COLORS.LIGHT._700};
      }
    }
  }
`;
