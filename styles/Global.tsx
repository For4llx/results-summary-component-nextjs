import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Hanken Grotesk', sans-serif;
    }
    html, body, #root {
        width: 100%;
        height: 100%;
        background-color: #ECF2FF;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    a {
        text-decoration: none;
    }
    em {
        font-style: normal;
    }
    li {
        list-style: none;
    }
    button {
        border: none;
        background-color: transparent;
    }
    input, textarea {
        border: none;
    }
    input:focus, textarea:focus {
            outline: none;
    }
`;