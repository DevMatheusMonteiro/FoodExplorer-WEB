import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  > .select {
    width: 100%;
    position: relative;
    color: ${({ theme }) => theme.COLORS.LIGHT._500};

    label {
      &[data-sronly="true"] {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
        margin: 0;
      }

      color: ${({ theme }) => `${theme.COLORS.LIGHT._400}`};
      display: inline-block;
      margin-bottom: 0.8rem;
    }

    .select-button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1.2rem;
      height: 4rem;
      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.COLORS.DARK._900};

      > .logo-value {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        column-gap: 0.8rem;

        > svg {
          &[data-hide="true"] {
            display: none;
          }

          color: ${({ theme }) => `${theme.COLORS.LIGHT._700}`};
        }

        > .selected-value {
          font-size: 1.4rem;
          font-family: ${({ theme }) => theme.FONTS.POPPINS};
          color: ${({ theme }) => `${theme.COLORS.LIGHT._100}`};

          @media (min-width: 1000px) {
            font-size: 1.6rem;
          }
        }
        > .default-value {
          font-size: 1.4rem;

          color: ${({ theme }) => `${theme.COLORS.LIGHT._500}`};

          @media (min-width: 1000px) {
            font-size: 1.6rem;
          }
        }
        > .new-value {
          inset: 0;
          position: absolute;
          font-size: 1.4rem;
          background-color: transparent;
          outline: none;
          border: 0;
          color: ${({ theme }) => `${theme.COLORS.LIGHT._200}`};
          z-index: 4;
          @media (min-width: 1000px) {
            font-size: 1.6rem;
          }
        }
      }

      .chevrons {
        svg {
          font-size: 1.6rem;
        }

        [data-chevron="chevronUp"] {
          display: none;
        }
      }
    }

    .options-view-button {
      all: unset;
      position: absolute;
      inset: 0;
      cursor: pointer;
      z-index: 2;
    }

    .options-view-button + .select-button[data-error="true"] {
      outline: 1px solid ${({ theme }) => theme.COLORS.TOMATO._200};
    }

    .options-view-button:focus + .select-button,
    .options-view-button:checked + .select-button {
      outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT._600};
    }

    &:has(.options-view-button:focus) label {
      color: ${({ theme }) => theme.COLORS.CAKE._200};
    }

    &:has(.options-view-button:checked) label,
    .options-view-button:checked + .select-button .chevrons {
      color: ${({ theme }) => theme.COLORS.CAKE._200};
    }

    .options-view-button:checked + .select-button .chevrons {
      [data-chevron="chevronDown"] {
        display: none;
      }

      [data-chevron="chevronUp"] {
        display: block;
      }
    }
  }
  .options-list {
    z-index: 3;
    display: none;
    position: absolute;
    width: 100%;
    list-style: none;
    margin-top: 0.4rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK._900};
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    overflow: hidden;

    .option-value {
      cursor: pointer;
      display: flex;
      align-items: center;
      height: 4rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK._1000};
      position: relative;

      &:last-of-type {
        border: 0;
      }

      &:has(input:checked),
      &:hover {
        background-color: ${({ theme }) => theme.COLORS.DARK._800};
      }

      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1.2rem;
        margin: 0 1px;
        width: 100%;
        height: 90%;
        border-radius: 0.8rem;

        > svg {
          color: ${({ theme }) => theme.COLORS.CAKE._200};
          display: none;
        }
      }

      &:has(input:focus) > div {
        outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT._500};
        &:not(.default-option) > label {
          color: ${({ theme }) => theme.COLORS.CAKE._200};
        }

        > svg {
          display: block;
        }
      }

      &:has(input:checked) > div {
        &:not(.default-option) > label {
          color: ${({ theme }) => theme.COLORS.CAKE._200};
        }

        > svg {
          display: block;
        }
      }

      & > .default-option {
        color: ${({ theme }) => theme.COLORS.LIGHT._500};
      }

      > input {
        all: unset;
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }

    .default-option > div {
      > label {
        color: ${({ theme }) => theme.COLORS.LIGHT._500};
      }
    }
  }
  &:has(.options-view-button:checked) {
    .options-list {
      display: block;
    }
  }
`;
