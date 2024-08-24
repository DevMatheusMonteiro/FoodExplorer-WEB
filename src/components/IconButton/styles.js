import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 0.8rem;

  color: ${({ theme }) => theme.COLORS.LIGHT._100};

  font-size: 2.4rem;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT._200};
  }
`;
