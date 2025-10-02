"use client"
import React, { useState } from 'react'
import Container from '../components/Container'
import Cookie from 'js-cookie'

function Dashboard() {

  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")

  const loginResponse = {
    token : "thisistokenthisistokenthisistokenthisistokenthisistokenthisistoken",
    expire : 8
  }

  Cookie.set('token', loginResponse.token ,{expires : loginResponse.expire})
  


  return (
    <div>
      <Container>
        <div className='flex flex-col justify-center items-center my-15 py-5 rounded-3xl'>
          <div className='sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-[#FAFAFA] shadow-[0px_0px_8px_2px_rgba(0,_0,_0,_0.1)] rounded-3xl grid grid-cols-1 gap-y-2 p-5'>
            <input onChange={(e)=> setUsername(e.target.value)} placeholder='نام کاربری یا ایمیل' className='font-sahel-regular text-end p-3 rounded-3xl border-[1.33px] border-gray-400 focus:border-orange-400 focus:outline focus:outline-orange-400' type="text" />
            <input onChange={(e)=> setPassword(e.target.value)} placeholder='رمز عبور' className='font-sahel-regular text-end p-3 rounded-3xl border-[1.33px] border-gray-400 focus:border-orange-400 focus:outline focus:outline-orange-400' type="password" />
          </div>
          <div className='sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-[#FAFAFA] shadow-[0px_0px_8px_2px_rgba(0,_0,_0,_0.1)] flex justify-center items-center rounded-3xl gap-y-2 m-3 p-5'>
            <button className='bg-amber-700 py-2 px-7 rounded-xl font-sahel-regular text-white'>ورود</button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Dashboard