import styled from "styled-components";

export const Container = styled.aside`
  &[data-appear="false"] {
    transform: translateX(-100%);

    * {
      display: none;
    }
  }

  &[data-appear="true"] {
    transform: translateX(0%);
  }

  position: fixed;
  inset: 0;
  overflow: auto;
  transition: all 0.3s ease-in-out;
  display: grid;
  grid-template-areas:
    "header"
    "form"
    "list"
    "footer";
  grid-template-rows: max-content max-content 2fr max-content;
  grid-template-columns: 1fr;
  z-index: 99999;

  background: ${({ theme }) => theme.GRADIENTS.GRADIENT_100.BG_GRADIENT};
  background: ${({ theme }) => theme.GRADIENTS.GRADIENT_100.GRADIENT};

  .header {
    grid-area: header;
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.GRADIENTS.GRADIENT_200.BG_GRADIENT};
    background: ${({ theme }) => theme.GRADIENTS.GRADIENT_200.GRADIENT};
    height: 100px;
    padding: 0 2rem;
    outline: none;

    > div {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      h2 {
        font-weight: normal;
      }

      > button {
        font-size: 2rem;
      }
    }
  }

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;

    grid-area: form;
    margin: 2rem 0;
    padding: 0 2rem;

    .input-container {
      svg {
        font-size: 2rem;
      }
    }

    @media (min-width: 500px) {
      flex-direction: row;
      gap: 4rem;
    }
  }

  > ul {
    grid-area: list;
    padding: 0 2rem 2rem;
    margin-top: 4.4rem;
    list-style: none;
    li + li {
      margin-top: 1.6rem;
    }

    > li {
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT._700};
      padding-bottom: 0.8rem;
    }

    li button {
      background-color: transparent;
      justify-content: flex-start;
      gap: 1.2rem;
      font-size: 2rem;
      width: max-content;

      > svg {
        font-size: 2rem;
      }
    }
  }

  footer {
    outline: none;
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;
