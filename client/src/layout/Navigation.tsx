import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <Link to="/">
        <span>홈</span>
      </Link>
      <Link to="/login">
        <span>로그인</span>
      </Link>
      <Link to="/signup">
        <span>회원가입</span>
      </Link>
    </div>
  )
}

export default Navigation
