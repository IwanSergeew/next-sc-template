import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-size: 16px;
        font-family: Rubik, sans-serif;
        color: #1E1E1E;
        background: #f9f9f9;
        min-height: 100vh;
    }

    #__next {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
`;
