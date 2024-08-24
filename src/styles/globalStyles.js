import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    }

    :root{
        font-size: 62.5%;   
    }

    :-webkit-autofill,
    :-webkit-autofill:hover, 
    :-webkit-autofill:focus {
        border: 0;
        -webkit-text-fill-color: ${({ theme }) => theme.COLORS.LIGHT._100};
        -webkit-box-shadow: 0 0 0px 1000px transparent inset;
        transition: background-color 5000s ease-in-out 0s;
    }

    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color:${({ theme }) => theme.COLORS.DARK._100};
        opacity: 0;
    }
    
    ::-webkit-scrollbar-thumb {
        cursor: pointer;
        border-radius: 0.8rem;
        background-color: ${({ theme }) => theme.COLORS.DARK._900};
    }
    
    ::-webkit-scrollbar-thumb:hover{
        background-color:${({ theme }) => theme.COLORS.DARK._1000} ;
    }

    button, textarea, input {
      color: ${({ theme }) => theme.COLORS.LIGHT._100};
      font-size: 1.4rem;
      font-family: ${({ theme }) => theme.FONTS.POPPINS};

      @media (min-width: 1000px){
        font-size: 1.6rem;
      }
    }

    a {
      color: ${({ theme }) => theme.COLORS.LIGHT._100};
      text-decoration: none;
    }

    button, a {
      cursor: pointer;
      transition: filter ease-in-out 0.3s;
    }

    button:hover, a:hover{
      filter: brightness(0.8);
    }

    button:disabled {
      opacity: 0.5;
    }

    body {
        min-height: 100vh;
        background: ${({ theme }) => theme.GRADIENTS.GRADIENT_100.BG_GRADIENT};
        background: ${({ theme }) => theme.GRADIENTS.GRADIENT_100.GRADIENT};
        color: ${({ theme }) => theme.COLORS.LIGHT._100};
        font-size: 1.4rem;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};

        @media (min-width: 1000px){
          font-size: 1.6rem;
        }
    }
`;
