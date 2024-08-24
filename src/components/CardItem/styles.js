import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT._500};
  border-radius: 0.8rem;
  min-height: 8rem;
  position: relative;
  overflow: hidden;

  > .card-button {
    position: absolute;
    inset: 0;
    border: none;
    text-align: left;
    background-color: transparent;
    outline: none;
    padding: 0.8rem;

    > .nickname {
      letter-spacing: 2px;
      font-size: 1.2rem;

      font-weight: bold;
    }

    > .number {
      font-size: 1rem;
      font-weight: normal;
    }
  }

  > .update {
    position: absolute;
    right: 0px;
    top: 4px;
  }

  &:has(.card-button:focus) {
    outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT._200};
  }

  &:has(.card-button[data-select="true"]) {
    outline: 1px solid ${({ theme }) => theme.COLORS.CAKE._200};
  }
`;
