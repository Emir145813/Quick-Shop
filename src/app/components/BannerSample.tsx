import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'
import { IBannerElements } from './Interfaces'
import Link from 'next/link'

function BannerSample({title,image} : IBannerElements) {
  return (
    <Link href="/shop" className='w-[844px] h-[302px] flex justify-center items-end relative'>
      <div className='h-[260px] rounded-3xl bg-gradient-to-r from-orange-400 to-orange-500 relative'>
        <Image
          src="/img/pattern 1.png"
          alt ="pattern"
          width = {844}
          height={255}
        />
        <Image
          src="/img/Rectangle.png"
          alt='Rectangle'
          width={487.72015380859375}
          height={117.72035217285156}
          className='absolute -bottom-[0.5px] left-0'
        />
        <div className=' h-[260px] absolute top-0 flex flex-col justify-center pr-7'>
          <h1 className='text-3xl font-sahel-bold text-white leading-[41.69px] mb-[11.17px]'>
            {title}
          </h1>
          <p className='text-[22px] h-[105.65131378173828px] font-sahel-semiBold text-white leading-[38.91px] w-[460px]'>
            تنوع بالای کیف و کفش در طرح و رنگ و برند های داخلی و خارجی با ارسال رایگان!
          </p>
          <div className='h-[30.377338409423828px] w-[198.7008056640625px] flex items-center'>
            <p className='font-sahel-regular text-2xl text-white'>
              مشاهده همه
            </p>
            <div className='w-[24px] h-[24px] m-[7px] rounded-[8px] flex justify-center items-center bg-white'>
              <Icon className='text-[#F97316] text-2xl' icon="material-symbols:arrow-back-rounded" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={image}
          alt='men logo'
          width={458.5403137207031}
          height={322.6922607421875}
          className='absolute left-0 -top-[20.98px]'
        />
      </div>
    </Link>
  )
}

export default BannerSample