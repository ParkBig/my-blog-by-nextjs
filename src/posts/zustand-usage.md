---
title: "Zustand usage"
date: "2023-01-15"
image: "zustand.jpg"
excerpt: This is my record about using Zustand.
isFeatured: true
---

Zustand 사용해보고 정리한 기록입니다.

이전까지는 redux-toolkit을 사용하여 전역상태를 관리해왔습니다.
redux-toolkit을 사용함에 불편한점은 없었지만, 다른 라이브러리도 사용해보고 싶어 찾아보다
zustand에 대해 알게되었고, 비교적으로 직관적이고, 가벼우며 사용하기 쉬워 참 좋았습니다..ㅎ

특히 개인적으로 redux-toolkit의 불변성을 좋아했는데 zustand에도 immer가 있어 만약 원한다면 가능합니다.

다음은 사용예시입니다.

```js
import { create } from "zustand";

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

const Counter = () => {
  const { count, inc } = useStore();

  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  );
};
```

너무 간단합니다.

만약 immer를 사용하고싶다면 다음과 같이사용하여 불변성을 신경쓰지 않을수 있슴다.

```js
const useBoardList = create(
  immer((set) => ({
    board: [],
    setBoard: (boardSetting) =>
      set((state) => {
        state.board = boardSetting;
      }),
  }))
);
```
