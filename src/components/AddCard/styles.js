import styled from "styled-components";

export const Container = styled.form`
  &[data-open="false"] {
    scale: 0;
  }

  transition: 0.3s ease-in-out;

  position: fixed;
  inset: 0;
  /* transform: translate(-50%, -50%); */
  width: 100%;
  max-width: 500px;
  max-height: 400px;
  margin: auto;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK._1000};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK._500};
  z-index: 9999;
  padding: 3.2rem 2.4rem;
  overflow: auto;
  outline: none;

  > .holderName-cpf {
    display: flex;
    align-items: flex-end;
    gap: 1.2rem;

    > .input-container {
      max-width: 300px;
    }
  }

  > .nickname-number {
    margin-top: 2rem;
    display: flex;
    align-items: flex-end;
    gap: 1.2rem;
  }

  > .expiration-code {
    margin-top: 2rem;
    display: flex;
    align-items: flex-end;
    gap: 1.2rem;

    > div {
      max-width: 280px;
    }
  }

  > .container-buttons {
    margin-top: 4rem;
    display: flex;
    gap: 1.2rem;
    > button {
      margin: 0 auto;
      max-width: 200px;
    }
  }
`;
