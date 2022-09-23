import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [canSignup, setCanSignup] = useState<boolean>(false)

  useEffect(() => {
    console.log(`useEffect 실행중`)
    if (email.includes('@') && email.includes('.') && password.length > 7) {
      setCanSignup(true)
    } else {
      setCanSignup(false)
    }
    console.log(canSignup)
  }, [email, password])

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e: any) => {
    setPassword(e.target.value)
  }

  const onSubmit = (event: any) => {
    event.preventDefault()
    console.log(email)
    console.log(password)
  }

  const onClick = () => {
    console.log(`회원가입 버튼 눌렀어요`)
    document.location.href = '/'
  }

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={onSubmit}>
        <h2>이메일</h2>
        <input
          className="border border-indigo-600"
          type="email"
          name="email"
          value={email}
          onChange={onChangeEmail}
          placeholder="이메일 입력해라"
          required
        />
        <h2>비밀번호</h2>
        <input
          className="border border-indigo-600"
          type="password"
          name="password"
          value={password}
          onChange={onChangePassword}
          placeholder="비밀번호 입력해라"
          required
          minLength={8}
        />
      </form>
      {canSignup ? (
        <button type="submit" onClick={onClick} className="text-red-400">
          회원가입
        </button>
      ) : (
        <button type="submit" className="text-blue-400">
          회원가입
        </button>
      )}
      <Link to="/login">
        <div>아이디가 있으신가요?</div>
      </Link>
    </div>
  )
}

export default Signup
