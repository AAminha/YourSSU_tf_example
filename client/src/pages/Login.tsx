import React from 'react'
import { Link } from 'react-router-dom'

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
      <div>
        <Link to="/signup">아이디가 없으신가요?</Link>
        <button type="submit">로그인</button>
      </div>
    </div>
  )
}

export default Login
