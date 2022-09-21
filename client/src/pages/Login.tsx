import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>로그인</h1>
      <form>
        <h2>이메일</h2>
        <input
          className="border border-indigo-600"
          type="email"
          name="email"
          placeholder="이메일 입력해라"
        />
      </form>
      <form>
        <h2>비밀번호</h2>
        <input
          className="border border-indigo-600"
          type="password"
          name="password"
          placeholder="비밀번호 입력해라"
        />
      </form>
      <button type="submit">로그인</button>
    </div>
  )
}

export default Login
