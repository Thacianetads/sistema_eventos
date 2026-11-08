import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  /* Reset Moderno */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  :root {
    --primary: #4f46e5;      /* Azul Índigo moderno */
    --primary-hover: #4338ca;
    --bg-color: #0f172a;     /* Fundo escuro elegante (Slate 900) */
    --card-bg: #1e293b;      /* Slate 800 */
    --text-main: #f8fafc;    /* Texto principal claro */
    --text-muted: #94a3b8;   /* Texto secundário */
    --accent: #06b6d4;       /* Cinza/Ciano de destaque */
  }

  /* Suavização de fontes */
  body {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-color);
    color: black;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* Estilização básica para links e botões */
  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }
`;

export default Global;