---
title: "Basic usage of socket io"
date: "2023-03-15"
image: "socket.png"
excerpt: This is my record about using socket io in server.
isFeatured: true
---

개인 프로젝트로 실시간 통신 기술인 웹소켓을 구현해 보고 싶어서 socket.io를 사용한 간단한 예시를 기록해봅니다.

다음과 같은 방법으로 서버측 소켓을 열어줍니다.

```js
const express = require("express");
const http = require("http");

const app = express();
const httpServer = http.createServer(app);
const wsServer = require("socket.io")(httpServer);

httpServer.listen(process.env.PORT || 4000, () => console.log("Listening on port", process.env.PORT || 4000));
```

다음으로 아래와 같은 방법으로 소켓 이벤트를 처리하며 실시간 양방향 통신을 이룰 수 있습니다.

```js
wsServer.on("connection", (socket) => {

  // "event-name1"이라는 이벤트이름에 반응하는 코드
  socket.on("event-name1", (프론트에서보낸 인자) => {

    // 해당 socket을 방에 조인시킵니다.
    socket.join("방이름");

    // 기초적인 통신법. event-name은 임의로 지정가능합니다.
    socket.to("방이름").emit("event-name", "보내고싶은 내용");
  });
})

```

다음은 프론트측 사용예시입니다.

```js
const socket = io(`서버주소`, { transports: ["websocket"] });

// 최초 접속시 방에 참가하는 코드
// "enter-room"은 emit 의 목적에 따라 임의로 지정가능한 event-name입니다.
// 인자로 몇개든 보낼수 있지만, 3개이상부터는 첫번째는 이벤트이름, 두번째부터 마지막 전까지는 인자, 마지막은 함수로 고정입니다.
// 서버측에서 인자를 담아서 함수 실행여부를 결정할 수 있습니다.
socket.emit("enter-room", roomName, () => {});

// 서버에서 보낸 이벤트에 반응하는 코드
socket.on("hello", (msg) => {
  console.log(msg)
})

```

