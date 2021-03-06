import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --gb-web-grey: #C9C9C9;
    --gb-web-grey-medium: #999999;
    --gb-web-grey-dark: #636366;
    --gb-web-light-gray: #666666;
    --gb-web-blue: #0A84FF;
    --gb-web-text: #C9C9C9;
    --gb-web-background: #626266;
    --gb-white: #ffffff;
    --gb-red: #DE5145;
    --gb-green: #33AB77;
    --gb-web-grey-darker: #101010;
    --gb-web-red: rgb(255, 122, 84);
    
    --gb-font-primary: 'Source Sans Pro', sans-serif;
  }

  h1, p, div, span, a {
  font-family: var(--gb-font-primary);  
  }

  h1, h2, h3, h4, h5, p, body, html {
    margin: 0px;
    padding: 0px;
  } 

  * {
    box-sizing: border-box;
  }

  button {
    height: 40px;
    width: 100%;
    border-radius: 6px;
    border: none;
    font-weight: bold;
    
    font-size: 16px;
    line-height: 14px;
    padding: 0px;
    cursor: pointer;
    color: var(--gb-white);
    outline: none;
  }

  button:hover {
    opacity: .6;
  }

  button:disabled {
    opacity: .6;
  }

  button.primary {
    background-color: var(--gb-web-blue);
  }

  button.green {
    background-color: var(--gb-green);
  }

  button.inverse {
    background-color: transparent;
    font-weight: normal;
    color: var(--gb-web-text);
    font-size: 14px;
  }

  button.red {
    background-color: var(--gb-red);
  }


  button.transparent {
    background-color: transparent;
    color: var(--gb-web-text);
    font-size: 14px;
    font-weight: 400;
  }

  button.bordered {
    background-color: transparent;
    color: var(--gb-web-text);
    border: 2px solid var(--gb-white);
    font-family: Source Sans Pro;
  }

  h1 {
    color: var(--gb-white);
    font-family: var(--gb-font-primary);
    font-weight: 700;
    line-height: 30px;
    font-size: 24px;
  }

  p {
    color: var(--gb-web-text);
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
  }

  input {
    width: 360px;
    height: 30px;
    background: transparent;
    border: none;
    border-bottom: 1px solid #ffffff;
    outline: none;
    color: #ffffff;
    font-size: 14px;
    line-height: 18px;
    transition: background-color 5000s ease-in-out 0s;
  }

  input.bordered {
    border: 1px solid var(--gb-white);
    border-radius: 6px;
    padding-left: 8px;
    height: 40px;
  }

  input::placeholder {
    color: var(--gb-medium-dark-gray);
    font-size: 14px;
    line-height: 14px;
    padding-bottom: 8px;
    text-transform: lowercase;
  }

  .danger {
    color: var(--gb-red);
  }

  .success {
    color: var(--gb-green);
  }

  a {
    text-decoration: none;
  }
  body,
  html,
  #app {
    height: 100%;
  }

`;

export default GlobalStyle;
