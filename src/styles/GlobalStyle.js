import {createGlobalStyle} from 'styled-components/macro';
import AppTheme from '../theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;

    &:before,
    &:after {
      box-sizing: border-box;
    }
  }

  body {
    font-family: 'Raleway', sans-serif;
    line-height: 1.5;
    font-weight: normal;
    color: ${AppTheme.colors.bodyColor};
  }

  ol, ul {
    list-style: none;
  }
`;


export default GlobalStyle;