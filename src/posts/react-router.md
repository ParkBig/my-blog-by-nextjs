---
title: "React-Router V6.4"
date: "2022-10-15"
image: "react-router-dom.png"
excerpt: "react-router-dom-v6.4를 사용해보자."
isFeatured: true
---

react-router-dom v6.4의 최신 라우팅에 대해 포스트를 해보겠습니당.

일단 사용법에서 기존의 라우팅 방법은 다음과 같습니다.

```js
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
```

v6.4에선 아래와 같습니다.

```js
// index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={router}/>);
```

```js
// Router.tsx

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./page/Home";
import About from "./page/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
```

```js
// App.tsx

import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return <Outlet />;
};

export default App;
```

Router.tsx에서 라우팅을 설정하고, App.tsx에서 <Outlet /> 에 라우팅된 요소들이 들어가게 됩니다.

추가로 Router.tsx에서 잘못된 라우트 이동, 혹은 에러 발생시의 페이지도 깔끔하게 만들수있습니다.

```js
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./page/Home";
import About from "./page/About";
import Redirect from "./page/Redirect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <Redirect />,
      },
    ],
    errorElement: <Redirect />,
  },
]);

export default router;
```

이것들은 기본 사용법이고, 이전버전에 비해 좋은 기능도 생겼으니 문서를 살펴보자.

이분의 글에서 정리가 잘 되어있다.
[참고링크](https://lucky516.tistory.com/217)
