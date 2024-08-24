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
    > a {
      font-family: ${({ theme }) => theme.FONTS.POPPINS};
      font-size: 2rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      border-radius: 0.8rem;
      width: max-content;

      &:focus {
        outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT._100};
      }
    }
  }
`;
