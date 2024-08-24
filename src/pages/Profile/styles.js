import styled from "styled-components";
export const Container = styled.div`
  display: grid;
  grid-template-areas: "header" "main" "footer";
  grid-template-columns: 1fr;
  grid-template-rows: max-content 2fr max-content;
  > main {
    > #home-link {
      display: inline-block;
      margin-bottom: 4rem;
      font-weight: bold;
      text-transform: uppercase;
    }
    padding: 4rem;
    grid-area: main;
    width: 100%;
    max-width: 1300px;
    margin: auto;

    > form {
      background-color: ${({ theme }) => theme.COLORS.DARK._700};
      padding: 2rem;
      border-radius: 0.8rem;
      max-width: 400px;
      margin: 0 auto;
      > legend {
        font-weight: bold;
        font-size: 2.4rem;
        text-align: center;
        margin-bottom: 2.4rem;
      }
      .input-container + .input-container {
        margin-top: 1.6rem;
      }

      > button {
        margin-top: 2.4rem;
      }
    }
  }
`;
