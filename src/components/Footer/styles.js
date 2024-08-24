import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.4rem;
  height: 80px;
  padding: 0 2rem;
  z-index: 999;

  background: ${({ theme }) => theme.GRADIENTS.GRADIENT_200.BG_GRADIENT};
  background: ${({ theme }) => theme.GRADIENTS.GRADIENT_200.GRADIENT};

  button {
    font-size: 3.2rem;
  }

  img {
    width: 100%;
    max-width: 120px;
  }

  p {
    text-align: right;
  }
`;
