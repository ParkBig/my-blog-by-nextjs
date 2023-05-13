---
title: "Styled-Components usage"
date: "2022-09-15"
image: "styled-components.png"
excerpt: This is my record about using styled-components.
isFeatured: true
---

styled-components 사용해보고 정리한 기록입니다.

styled-components는 js파일에서 css를 사용할 수 있게 해주는 css-in-js 라이브러리입니다.

기본적인 사용법은 다음과 같습니다.

```js
import styled from "styled-components";

const Hello = () => {
  return (
    <Wrap>
      <Hello>안녕하세요!</Hello>
    </Wrap>
  );
};

export default Hello;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Hello = styled.h1`
  color: tomato;
`;
```

뽀너스로 createGlobalStyle를 사용하여 전체적인 css를 적용할 수 있습니다.
보통 App.js에 사용하며 당므과 같습니다.

```js
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Hello />
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    font: inherit;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
      display: block;
  }

  *[hidden] {
      display: none;
  }
  body {
      line-height: 1;
  }
  menu, ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  content: '';
  content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
  * {
      box-sizing: border-box;
  }
  body {
      font-family: 'Shantell Sans', cursive;
      margin: 0px;
  }
  a {
      text-decoration:none;
      color: inherit;
  }
`;
```
