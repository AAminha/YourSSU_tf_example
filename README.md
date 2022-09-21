# wanted-pre-onboarding-challenge-fe-1-api

# 챌린지

## 숙제

- 유어슈 관리자 페이지 TF 본격 시작 전, 숙제입니당..!

### 메인 페이지
<img width="800" alt="image" src="https://user-images.githubusercontent.com/63512217/183301773-20e11f9b-7165-4788-994f-c1671ce4588e.png">

### 로그인 페이지
<img width="800" alt="image" src="https://user-images.githubusercontent.com/63512217/183301789-1cb478f2-e286-475d-83de-c0c0fc4ac831.png">

### 회원가입 페이지
<img width="800" alt="image" src="https://user-images.githubusercontent.com/63512217/183301795-490a115f-6be6-45de-b9f0-4ee6b849975f.png">

### 투두 리스트 클릭 (/404) (로그인 전)
<img width="800" alt="image" src="https://user-images.githubusercontent.com/63512217/183301805-b1150b40-7c31-48a1-839f-81711d4151db.png">

### 투두 리스트 (로그인 후)
<img width="800" alt="image" src="https://user-images.githubusercontent.com/63512217/183301821-9bd8d313-549a-4be7-9705-633fbde8434a.png">


### 투두 리스트 업데이트 클릭
<img width="800" alt="image" src="https://user-images.githubusercontent.com/63512217/183301835-4909b4df-8968-4449-a02f-7cc484b6412e.png">


### 투두 리스트 업데이트 완료
<img width="800" alt="image" src="https://user-images.githubusercontent.com/63512217/183301855-3a38950f-ff30-4669-afc5-274557859c63.png">

### 투두 리스트 삭제 버튼 클릭
<img width="800" alt="image" src="https://user-images.githubusercontent.com/63512217/183301871-2f0b5479-6144-4125-864a-66053383ae89.png">




## 실행 방법

```
/root
- cd client
- yarn
- yarn dev

/root
- cd server
- yarn
- yarn start
```

# 1-2) 클라이언트 구현 과제 상태

## Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [ ] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [ ] 이메일 조건 : 최소 `@`, `.` 포함
  - [ ] 비밀번호 조건 : 8자 이상 입력
  - [ ] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [ ] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [ ] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [ ] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요
