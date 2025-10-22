import React from 'react'
import UserAvatar from './UserAvatar'
import { auth } from '@/auth'
import Image from 'next/image'

async function Profile_Tick() {

  const session = await auth()

  return (
    <div className='w-[152.49px] h-[47.73px] rounded-[15.91px] border-[1.33px] border-[#737373] flex justify-center items-center gap-2 hover:border-[#F97316]'>
      {
        session?.user?.image ?
        <Image
        className='rounded-3xl'
        src={session.user.image}
        alt='image'
        width={28}
        height={28}
        />:
        <UserAvatar/>
      }
      <div className='font-sahel-regular text-lg text-white h-full flex justify-center items-center hover:text-white'>
        {
          session?.user?.name ?
          session?.user?.name :
          <p>
            ورود و ثبت نام
          </p>
        }
      </div>
    </div>
  )
}

export default Profile_Tick