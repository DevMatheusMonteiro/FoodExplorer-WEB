import styled from "styled-components";
export const Container = styled.form`
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 2.4rem;
  > legend {
    font-size: 2.4rem;
    margin-bottom: 3.2rem;
  }

  > .image-name-category {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    > div {
      width: 100%;
    }
    > .image {
      &:has(#productImage:hover) > label,
      &:has(#productImage:focus) > label {
        color: ${({ theme }) => theme.COLORS.CAKE._200};
      }
      > label {
        color: ${({ theme }) => `${theme.COLORS.LIGHT._400}`};
        display: inline-block;
        margin-bottom: 0.8rem;
        width: 100%;
      }
      > .containerProductImage {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 4rem;
        background-color: ${({ theme }) => theme.COLORS.DARK._900};
        &:has(#productImage:focus) {
          outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT._600};
        }

        &:has(#productImage:hover) {
          filter: brightness(0.8);
        }

        border-radius: 0.8rem;
        > label {
          outline: none;
          cursor: pointer;
          position: absolute;
          inset: 0;
        }

        > div {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          > svg {
            font-size: 2rem;
          }
        }
        > input {
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          height: 1px;
          overflow: hidden;
          position: absolute;
          white-space: nowrap;
          width: 1px;
          margin: 0;
        }
      }
    }
    @media (min-width: 700px) {
      flex-direction: row;
    }
  }
  > .ingredients-price {
    margin-top: 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    > .ingredientsGroup {
      width: 100%;
      &:has(input:focus),
      &:has(button:focus) {
        > label {
          color: ${({ theme }) => theme.COLORS.CAKE._200};
        }
      }
      > label {
        color: ${({ theme }) => `${theme.COLORS.LIGHT._400}`};
        display: inline-block;
        margin-bottom: 0.8rem;
        width: 100%;
      }
      > .ingredients {
        background-color: ${({ theme }) => theme.COLORS.DARK._900};
        padding: 4px 0.8rem;
        border-radius: 0.8rem;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        column-gap: 1.6rem;
        row-gap: 1rem;
        input {
          border: 0;
          background-color: transparent;
          width: 100%;
          height: 100%;
          outline: none;
        }
        button {
          > svg {
            font-size: 1.6rem;
          }
        }
        > .oldIngredient {
          height: 3.2rem;
          width: 100%;
          max-width: 130px;
          border-radius: 0.8rem;
          display: flex;
          padding: 0 0.8rem;
          background-color: ${({ theme }) => theme.COLORS.LIGHT._600};
        }
        > .newIngredient {
          height: 3.2rem;
          width: 100%;
          max-width: 130px;
          border-radius: 0.8rem;
          display: flex;
          padding: 0 0.8rem;
          border: 2px dashed ${({ theme }) => theme.COLORS.LIGHT._600};
        }
      }
    }
    @media (min-width: 700px) {
      flex-direction: row;
      align-items: center;
    }
  }
  > .description {
    &:has(textarea:focus) {
      > label {
        color: ${({ theme }) => `${theme.COLORS.CAKE._200}`};
      }
    }
    margin-top: 2.4rem;
    > label {
      width: 100%;
      color: ${({ theme }) => `${theme.COLORS.LIGHT._400}`};
      display: inline-block;
      margin-bottom: 0.8rem;
    }
    > #productDescription {
      width: 100%;
      height: 10rem;
      resize: none;
      background-color: ${({ theme }) => theme.COLORS.DARK._900};
      border: 0;
      border-radius: 0.8rem;
      padding: 0.8rem;
      &:focus {
        outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT._600};
      }
    }
  }
  > .containerButtons {
    margin-top: 2.4rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2.4rem;

    button {
      max-width: 200px;
    }

    #deleteProductButton {
      background-color: ${({ theme }) => theme.COLORS.DARK._900};
    }
  }
`;
