import React from 'react'
import UserAvatar from './UserAvatar'
import Image from 'next/image'

async function Profile_Tick() {


  return (
    <div className='w-[152.49px] h-[47.73px] rounded-[15.91px] border-[1.33px] border-[#737373] flex justify-center items-center gap-2 hover:border-[#F97316]'>
      <UserAvatar/>
      <div className='font-sahel-regular text-lg text-white h-full flex justify-center items-center hover:text-white'>
        <p>
          ورود و ثبت نام
        </p>
      </div>
    </div>
  )
}

export default Profile_Tick