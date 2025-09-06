import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/img/Hero.jpg"
        alt="Hero Image"
        width={1920}
        height={1080}
        className="w-full h-[920px] object-cover"
      />
      <div className='w-[90%] h-[920px] m-auto absolute inset-0 grid grid-cols-2 justify-center items-center'>
        <div className='h-full flex flex-col justify-center gap-3'>
          <h1 className='font-sahel-bold text-[48px] weight-[700] text-white'>
            تجربه راحت ترین خرید با کویک شاپ
          </h1>
          <p className='w-[794px] text-[28px] font-[400] leading-[50px] text-white font-sahel-regular'>
            با هر سلیقه ای میتونی از کویک شاپ خرید کنی! تنوع بالای کیف و کفش مردانه و زنانه و ارسال رایگان خرید رو برات آسون تر می کنه!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header 