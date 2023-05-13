---
title: "Axios usage"
date: "2022-12-15"
image: "axios.png"
excerpt: This is my record about using Axios.
isFeatured: true
---

Axios를 사용해보고 정리한 기록입니다.

axios는 JSON으로 변환해주는 과정이 필요없고 기존 fetch에는 없는 기능인 HTTP요청 가로채기, 요청 취소 타임아웃 등과 같은 기능을 갖추고있어 활용하기에 좋습니다.

다음과 같이 axios 인스턴트를 만들어 코드 활용성을 높일 수 있습니다.

```js
import axios from "axios";

export const axiosIns = axios.create({
  baseURL: "요청을 원하는 baseUrl", // ex) https://naver.com
});
```

각 요청에 토큰이 필요할 경우 다음과 같이 자동적으로 토큰을 헤더에담아 요청할 수 있습니다.

```js
axiosIns.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    config.headers["Access_Token"] = accessToken;
  }
  return config;
});
```

정의한 axiosIns는 다음과 같이 사용할 수 있습니다.

```js
export const postLogin = async (userData) => {
  const data = await axiosIns.post("/signin", userData);
  return data;
};
```
