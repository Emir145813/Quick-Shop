import React from 'react'
import { signIn } from "@/auth"

export function CredentialsInput() {
  return (
    <form
    className='flex flex-col items-center'
      action={async (formData) => {
        "use server"
        await signIn("credentials", formData)
      }}
    >
      <div className='flex flex-col justify-between pt-10 w-full'>
        <input placeholder='ایمیل' className='bg-white text-[20px] border-[1.33px] border-gray-300 p-5 rounded-2xl focus:border[1.33px] focus:outline-orange-500 mb-2' name="email" type="email" />
        <input placeholder='رمز عبور' className='bg-white text-[20px] border-[1.33px] border-gray-300 p-5 rounded-2xl focus:border[1.33px] focus:outline-orange-500 ' name="password" type="password" />
      </div>
      <button className='bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl text-[20px] text-white w-full px-10 py-5 my-2 cursor-pointer'
      type="submit"
      >
        Sign In
      </button>
    </form>
  )
}