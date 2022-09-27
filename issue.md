## 연습하면서 생겼던 문제들 끄적이는 곳..

### 깃클론한 리액트 실행
- 클론한다고 바로 실행되는 게 아니라, `npm install` 명령을 해줘야 package-json module이 업데이트된다.
  - server 폴더와 client 폴더의 package-lock.json과 yarn.lock을 삭제
  - 각 폴더에  `npm install`을 실행
  - [참고 링크](https://codemasterkimc.tistory.com/52)

### 할 때마다 까먹는 깃허브랑 연동하기
```
git init
git remote add origin (repo 주소)
git add .
git commit -m "~~"
git push origin master
```

### 깃모지를 사용해보자
- 깃모지 설치는 `npm i -g gitmoji-cli`
- 깃모지 설명은 `gitmoji --help`
- `git commit -m` 대신에 `gitmoji -c`로 커밋 작성하기
- 약속된 깃모지 내용은 [여기](https://inpa.tistory.com/entry/GIT-%E2%9A%A1%EF%B8%8F-Gitmoji-%EC%82%AC%EC%9A%A9%EB%B2%95-Gitmoji-cli) 참고하기
- 깃모지에 맞는 커밋이 되어야 하므로 커밋을 조금 세분화해서 하기!!

### axios
- 설치 : `yarn add axios`
- axios를 사용해서 GET(조회), PUT(등록), POST(수정), DELETE(제거) 등의 메서드로 API 요청 가능
- 사용법
```
import axios from 'axios';
//axios.get(API 주소);
axios.get('/user/1');

//axios.post(API 주소, 등록하고자 하는 정보);
axios.post('/users', {
  username: 'blabla',
  name: 'blabla'
})
```
- [참고](https://react.vlpt.us/integrate-api/01-basic.html)

### React Query
#### 설명
- 리액트 애플리케이션에서 서버의 데이터를 조회하거나 캐싱, 업데이트, 에러 처리와 같은 비동기 로직을 지원하는 fetching 라이브러리
- Server state 관리
  - Client가 제어하거나 소유하지 않는 위치에서 원격으로 유지
  - fetching 및 updating을 위한 비동기 API가 필요
  - 상태가 공유되며 사용자 모르게 변경 가능
  - 주의하지 않으면 애플리케이션이 잠재적으로 "out of date"상태가 될 수 있음.
- 캐싱 지원
- 동일한 데이터에 대한 중복 요청 제거하고 한 번만 요청하도록 함
- "out of date" 상태의 데이터 파악, updating 지원
- Pagination 및 Lazy Loading 성능 최적화
- Server State의 메모리 관리 및 garbage collection 지원
- React Hooks와 유사한 인터페이스 제공

#### 라이프 사이클
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0hY1V%2FbtrFXYgkiWB%2Frp8XSWeQMdcS0KmKODimoK%2Fimg.jpg)
- Fetching : 초기 상태이며 백엔드와 같은 외부 소스로부터 데이터를 가져오기 위해 동작
- Fresh : Fetching 이후에 Server-side와 Client-side의 데이터가 동일하게 유지되는 상태
- Stale : 데이터가 오래된 상태, Fetching을 통해 Fresh 상태로 유지해야 함
- Inactive : 애플리케이션에서 사용되지 않는 데이터에 대한 상태. 가비지 컬렉터에 의해 삭제 됨
- Deleted : Inactive 상태의 데이터가 캐시에서 삭제된 상태

#### 사용법
- 설치 : `yarn add react-query`
- QueryClientProvider : 리액트에서 비동기 요청을 처리하기 위한 Context Provider로 동작하며 하위 컴포넌트에서 QueryClient를 사용할 수 있게 해줌
  - Context Provider : context를 하위 컴포넌트로 전달 역할
  - QueryClient : 쿼리와 쿼리 상태를 관리하는 메소드를 포함한 객체
  - Query : 데이터베이스에 정보를 요청하는 것
```
/* index.tsx */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
- QueryCache : React Query를 이용하여 사용된 쿼리의 메타 정보와 상태 등의 데이터를 저장하는 용도로 사용. onError, onSuccess 콜백을 사용하여 애플리케이션 전역에서 이벤트 핸들링 가능
```
/* index.tsx */

import { QueryClient, QueryClientProvider, QueryCache } from 'react-query';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.log('onError', error);
    },
    onSuccess: (data) => {
      console.log('onSuccess', data);
    }
  })
});
```

#### React Query API
1. useQuery
- 서버에서 데이터를 가져오기(get) 위해 사용하는 hook
- unique key, promise 기반의 함수, 옵션 값을 파라미터로 받아서 동작
  - promise : 비동기 처리에 활용되는 객체(동기처럼 사용). 원활한 데이터 통신을 위해 활용.
  - unique key : 애플리케이션 전역에서 해당 쿼리를 refetching, caching, sharing 하는 용도로 사용하며 리턴 값으로 데이터 사용에 필요한 정보(status, data, error) 제공



  https://freestrokes.tistory.com/170

### 의문1
![](2022-09-21-23-44-29.png)
- 왜 주석도 에러로 뜨지?
- 왜 props 사용 안했다고 난리지..
- 원래 이렇게 해야하는건가?

### 의문2
- h1, h2, input 같은 태그들의 기본 스타일(?)이 반영이 안된다. 왜지? 
