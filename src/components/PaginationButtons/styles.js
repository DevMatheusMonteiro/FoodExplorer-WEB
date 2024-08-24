import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > .buttonPages {
    display: flex;
    > button {
      max-width: max-content;
      height: max-content;
      background-color: transparent;
      border: none;
      > svg {
        font-size: 3.2rem;
      }
    }
  }
`;
