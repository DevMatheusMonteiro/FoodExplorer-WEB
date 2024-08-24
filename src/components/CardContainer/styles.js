import styled from "styled-components";

export const Container = styled.div`
  &[data-active="false"] {
    display: none;
  }

  > .search-newCardButton {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;

    > .newCardButton {
      max-width: 140px;
      height: 4rem;

      > svg {
        font-size: 1.2rem;
      }
    }
  }

  > .card-list {
    max-height: 400px;
    overflow: auto;
    margin-top: 2.4rem;
    padding: 1px 2.4rem;
    display: flex;

    gap: 1.2rem;
    flex-wrap: wrap;
    list-style: none;

    li {
      width: 100%;
      max-width: 160px;
    }
  }
`;
