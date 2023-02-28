import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'IBM Plex Sans KR', sans-serif;
        background-color: #f5f5f7;
        color: #1d1d1f;
    }
    ul, ol{
        list-style: none;
    }

    a{
        text-decoration: none;
    }
    a:visited, a:link{
        color: black;
    }
`

export default GlobalStyle;