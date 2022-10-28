import { css } from "@emotion/react";

export const GlobalStyle = css`
  :root {
    --wheel-size: 640px;
    --wheel-slice-spacing: 50px;
    --wheel-border-size: 5px;
    --wheel-color: #d38c12;
    --neutral-color: white;
    --PI: 3.14159265358979;
    --nb-item: 0;
    --item-nb: 0;
    --selected-item: 0;
    --nb-turn: 5;
    --spinning-duration: 5s;
    --reset-duration: 0.25s;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
  }
`;
