import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  > h2 {
    font-size: 2.4rem;
  }
  .table {
    margin-top: 2.4rem;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT._700};
    border-radius: 0.8rem;

    > table {
      width: 100%;
      border-collapse: collapse;
    }

    > table th {
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT._700};

      overflow: hidden;

      &:first-of-type {
        border-radius: 0.8rem 0 0 0;
      }

      &:last-of-type {
        border-radius: 0 0.8rem 0 0;
      }

      &:has(button:focus) {
        outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT._200};
      }
    }

    > table th > button {
      display: flex;
      justify-content: center;
      align-items: center;

      column-gap: 0.2rem;
      font-size: 1.6rem;
      background-color: transparent;
      border: none;
      width: 100%;
      height: 100%;
      outline: none;

      > svg {
        font-size: 1.4rem;
      }
    }

    > table th {
      height: 8rem;
      width: calc(100% / 3);
    }

    > table th {
      &[data-active="true"] {
        background-color: ${({ theme }) => theme.COLORS.DARK._1000};
      }

      border-right: 1px solid ${({ theme }) => theme.COLORS.LIGHT._700};
    }

    > table th:last-of-type {
      border-right: 0;
    }

    > table tbody tr td {
      padding: 4rem 2rem;
      position: relative;
      overflow: hidden;
    }

    > table tbody tr td > .pix {
      &[data-active="false"] {
        display: none;
      }

      text-align: center;

      > img {
        width: 100%;
        max-width: 200px;
      }
    }
  }
  > .container-page-buttons {
    display: flex;
    justify-content: space-between;
    gap: 1.2rem;
    margin-top: 2.8rem;

    > button {
      max-width: 100px;
    }
    > .finalizePayment {
      background-color: ${({ theme }) => theme.COLORS.MINT._100};
    }
    @media (min-width: 1000px) {
      display: none;
    }
  }
`;
