import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useMutation } from 'react-query'
import { Link } from 'react-router-dom'

interface Info {
  email: string
  password: string
}

const Login = () => {
  const [infos, setInfos] = React.useState<Info>({
    email: '',
    password: '',
  })
  const [canLogin, setCanLogin] = useState<boolean>(false)

  const getInfo = useMutation(
    /* 이거 useQuery로 바꿔야 함. */
    (info: Info) => axios.post('http://localhost:8080/savePerson', info),
    {
      onSuccess: () => {
        console.log('onSuccess')
      },
      onError: (error) => {
        console.log('onError')
        console.log(error)
      },
      onSettled: () => {
        console.log('onSettled')
      },
    }
  )

  useEffect(() => {
    console.log(`useEffect 실행중`)
    if (infos.email.includes('@') && infos.email.includes('.') && infos.password.length > 7) {
      setCanLogin(true)
    } else {
      setCanLogin(false)
    }
    console.log(canLogin)
  }, [infos.email, infos.password])

  const onSubmit = (event: any) => {
    event.preventDefault()
    console.log(infos.email)
    console.log(infos.password)
  }

  const onChangeEmail = (e: any) => {
    setInfos((current) => {
      return {
        ...current,
        email: e.target.value,
      }
    })
  }

  const onChangePassword = (e: any) => {
    setInfos((current) => {
      return {
        ...current,
        password: e.target.value,
      }
    })
  }

  const onGetInfo = () => {
    console.log(`회원가입 버튼 눌렀어요`)
    getInfo.mutate(infos)
    /* document.location.href = '/' */
  }

  return (
    <div className="text-center">
      <h1 className="p-5 text-lg">로그인</h1>
      <form onSubmit={onSubmit}>
        <div className="m-5">
          <h2 className="font-semibold inline-block w-20 text-left">이메일</h2>
          <input
            className="border-2 border-cyan-600 pl-1"
            type="email"
            name="email"
            value={infos.email}
            onChange={onChangeEmail}
            placeholder="이메일"
            required
          />
        </div>
        <div className="m-5">
          <h2 className="font-semibold inline-block w-20 text-left">비밀번호</h2>
          <input
            className="border-2 border-cyan-600 pl-1"
            type="password"
            name="password"
            value={infos.password}
            onChange={onChangePassword}
            placeholder="비밀번호"
            required
            minLength={8}
          />
        </div>
        {canLogin ? (
          <div className="hover:bg-slate-400 bg-slate-200 shadow-md inline-block rounded-md pl-3 pr-3 pt-1 pb-1 mt-4">
            <button type="submit" onClick={onGetInfo} className=" text-black">
              회원가입
            </button>
          </div>
        ) : (
          <div className="bg-slate-200 shadow-md inline-block rounded-md pl-3 pr-3 pt-1 pb-1 mt-4">
            <button type="submit" className=" text-slate-400">
              로그인
            </button>
          </div>
        )}
      </form>
      <div className="text-gray-500 font-semibold pt-8">
        <span>아이디가 없으신가요?&nbsp;&nbsp;</span>
        <Link to="/login">
          <span className="hover:text-black inline-flex">회원가입하러 가기</span>
        </Link>
      </div>
    </div>
  )
}

export default Login
