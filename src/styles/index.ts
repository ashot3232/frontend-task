import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
     margin: 0;
     padding: 0;
     outline: 0;
     box-sizing: border-box;
     font-family: 'Open Sans', sans-serif; 
  }
  
  a {
    color: ${({ theme }) => theme.colors.text};
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const light = {
  colors: {
    background: '#fff',
    text: '#5b5c5d',
    hover: '#ddd',
    boxBackground: '#f2f2f2',
  },
};

export const dark = {
  colors: {
    background: '#333333ed',
    text: '#fff',
    hover: '#808080a3',
    boxBackground: '#80808069',
  },
};
