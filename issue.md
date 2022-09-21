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


### 의문..
![](2022-09-21-22-36-10.png)
- 왜 주석도 에러로 뜨지?
- 왜 props 사용 안했다고 난리지..
- 원래 이렇게 해야하는건가?