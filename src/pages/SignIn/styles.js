import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem;
  padding-top: 10rem;
  padding-bottom: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 11.2rem;
  min-height: 100vh;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  > img {
    width: 100%;
    max-width: 38rem;
  }

  > form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    gap: 3.2rem;
    max-width: 480px;

    > legend {
      display: none;
    }
  }

  a {
    gap: 0.8rem;
    align-self: center;
    border-radius: 0.8rem;

    &:focus {
      outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT._500};
    }
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    gap: 18rem;
    padding-top: 0;

    > img {
      max-width: 48rem;
    }

    form {
      background-color: ${({ theme }) => theme.COLORS.DARK._700};
      padding: 4rem;
      border-radius: 1.2rem;
      margin: 0;

      > legend {
        display: block;
        text-align: center;
        font-size: 4rem;
        font-weight: 500;
      }
    }
  }
`;
