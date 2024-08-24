import styled from "styled-components";
export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: max-content 2fr max-content;
  grid-template-columns: 1fr;
  > main {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    grid-area: main;
    padding: 4rem;
    > #home-link {
      display: inline-block;
      margin-bottom: 4rem;
      font-weight: bold;
      text-transform: uppercase;
    }
    > #home-link:focus {
      outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT._100};
      border-radius: 2px;
    }
    .title-select {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 1.6rem;
      > h2 {
        font-size: 2.4rem;
      }
      > * {
        z-index: 999;
      }
      > .select-container {
        max-width: 180px;
        .statusFilter {
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
      }
    }
    > .content {
      margin-top: 2.4rem;
      .paginationButtons:first-child {
        margin-bottom: 2.4rem;
      }
      .paginationButtons:last-child {
        margin-top: 2.4rem;
      }
      .order-item + .order-item {
        margin-top: 2.4rem;
      }
      .order-table {
        display: none;
      }
      @media (min-width: 1000px) {
        .order-item {
          display: none;
        }
        .order-table {
          display: block;
        }
      }
    }
  }
`;
