import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="flex items-center justify-between border-cyan-600 text-cyan-600 p-3 rounded-xl border-2">
      <div className="">
        <Link to="/">
          <span className="font-extrabold text-xl">Home</span>
        </Link>
      </div>
      <ul className="flex space-x-10">
        <Link to="/login">
          <li className="font-semibold hover:text-stone-600 rounded">로그인</li>
        </Link>
        <Link to="/signup">
          <li className="font-semibold hover:text-stone-600 rounded">회원가입</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navigation
