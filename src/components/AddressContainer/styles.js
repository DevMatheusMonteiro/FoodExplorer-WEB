import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  > h2 {
    font-size: 2.4rem;
  }
  > .search-add-container {
    margin-top: 2.4rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    > button {
      height: 4rem;
      max-width: 80px;
      > svg {
        font-size: 1.4rem;
      }
    }
  }
  > .addresses-list {
    list-style: none;
    padding: 2px;
    margin-top: 2.8rem;
    li + li {
      margin-top: 1.2rem;
    }
  }
  > .container-page-buttons {
    display: flex;
    justify-content: space-between;
    gap: 1.2rem;
    margin-top: 2.8rem;
    > button {
      max-width: 200px;
    }
    @media (min-width: 1000px) {
      display: none;
    }
  }
`;
