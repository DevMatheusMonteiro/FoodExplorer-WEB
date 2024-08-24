import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;

  width: 100%;
  height: 5.2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT._100};
  background-color: ${({ theme }) => theme.COLORS.TOMATO._100};

  font-weight: bold;

  border: none;
  border-radius: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT._500};
  }

  > svg {
    font-size: 1.6rem;
  }
`;
