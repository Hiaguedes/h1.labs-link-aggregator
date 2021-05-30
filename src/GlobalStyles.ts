import {createGlobalStyle  } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;
        outline: 0;
        border: 0;
    };

    div {
        display: inline-block;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: #fff;
        background-color: #485461;
        background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
        overflow: hidden;
    }

    a {
        text-decoration: none;
        color: #f1f1f1;
        font-family: sans-serif;
    }

    p {
        color: #f1f1f1;
        font-size: 18px;
        font-family: sans-serif;
        display: inline-block;
    }
`;