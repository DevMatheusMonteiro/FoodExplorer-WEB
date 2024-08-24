import styled from "styled-components";

export const Container = styled.div`
  &[data-open="false"] {
    scale: 0;
  }
  transition: 0.3s ease-in-out;
  position: fixed;
  overflow: auto;
  inset: 0;
  outline: 0;
  background: ${({ theme }) => theme.GRADIENTS.GRADIENT_100.BG_GRADIENT};
  background: ${({ theme }) => theme.GRADIENTS.GRADIENT_100.GRADIENT};
  z-index: 999999;
  padding: 4rem;
  padding-top: 8rem;
  > h3 {
    font-size: 2.8rem;
  }
  @media (min-width: 1000px) {
    inset: inherit;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.8rem;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT._700};
    width: 100%;
    max-width: 800px;
  }
`;
