import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --tx-clr: #1c2732;
    --bg-clr: #ffcaea;
    --cta-clr: #e31837;
    --cta-inv-clr: #ffc500;
  }

  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Barlow Semi Condensed', sans-serif;
  }

  .title {
    color: var(--cta-clr);
    font-family: 'Bad Script', cursive;
    font-size: 2rem;
    text-align: center;
  }
`;
