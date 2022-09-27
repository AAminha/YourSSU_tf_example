import axios from 'axios'
import React, { useEffect, useState } from 'react'
/* import { useQuery } from 'react-query' */
import { useMutation } from 'react-query'
import { Link } from 'react-router-dom'

interface Info {
  email: string
  password: string
}

const Signup = () => {
  const [infos, setInfos] = useState<Info>({
    email: '',
    password: '',
  })
  const [canSignup, setCanSignup] = useState<boolean>(false)

  const saveInfo = useMutation(
    (info: Info) => axios.post('http://localhost:8080/users/create', info),
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
      setCanSignup(true)
    } else {
      setCanSignup(false)
    }
    console.log(canSignup)
  }, [infos.email, infos.password])

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

  const onSubmit = (event: any) => {
    event.preventDefault()
    console.log(infos.email)
    console.log(infos.password)
  }

  const onSaveInfo = () => {
    console.log(`회원가입 버튼 눌렀어요`)
    saveInfo.mutate(infos)
    /* document.location.href = '/' */
  }

  return (
    <div className="text-center">
      <h1 className="p-5 text-lg">회원가입</h1>
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
        {canSignup ? (
          <div className="hover:bg-slate-400 bg-slate-200 shadow-md inline-block rounded-md pl-3 pr-3 pt-1 pb-1 mt-4">
            <button type="submit" onClick={onSaveInfo} className=" text-black">
              회원가입
            </button>
          </div>
        ) : (
          <div className="bg-slate-200 shadow-md inline-block rounded-md pl-3 pr-3 pt-1 pb-1 mt-4">
            <button type="submit" className=" text-slate-400">
              회원가입
            </button>
          </div>
        )}
      </form>
      <div className="text-gray-500 font-semibold pt-8">
        <span>아이디가 있으신가요?&nbsp;&nbsp;</span>
        <Link to="/login">
          <span className="hover:text-black inline-flex">로그인하러 가기</span>
        </Link>
      </div>
    </div>
  )
}

export default Signup
