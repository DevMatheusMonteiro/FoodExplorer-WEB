import styled from "styled-components";
export const Container = styled.div`
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  > h2 {
    font-size: 2.4rem;
  }
  > .orders-list {
    overflow-y: auto;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    column-gap: 4rem;
    row-gap: 2rem;
    padding: 2px;
    max-height: 400px;
    list-style: none;
    margin-top: 2.4rem;
    .order-item {
      height: 100px;
      width: 100%;
      max-width: 230px;
      > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
        gap: 1.2rem;
        > a {
          width: clamp(6rem, 100%, 8rem);
          > img {
            width: 100%;
            border-radius: 50%;
            aspect-ratio: 1/1;
            object-fit: cover;
          }
        }
        a:focus,
        button:focus {
          outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT._100};
          border-radius: 4px;
        }
        > div {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          .order-name {
            max-width: max-content;
            font-size: 2rem;
          }
          > .text-button {
            text-transform: lowercase;
            font-size: 1.2rem;
            color: ${({ theme }) => theme.COLORS.TOMATO._300};
            background-color: transparent;
            border: 0;
            width: max-content;
            font-weight: bold;
            letter-spacing: 1px;
          }
        }
      }
    }
  }
  .amount {
    font-size: 2.4rem;
    margin-top: 2.4rem;
    color: ${({ theme }) => theme.COLORS.CAKE._200};
  }
  .goForward {
    max-width: 100px;
    margin-top: 4rem;
    margin-left: auto;
    @media (min-width: 1000px) {
      display: none;
    }
  }
`;
