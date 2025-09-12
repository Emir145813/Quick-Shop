import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='relative bg-amber-500'>
      <div className="w-full h-full bg-amber-950">
        <div className='relative h-[920px]'>
          <Image
            src="/img/Hero.jpg"
            alt="Hero Image"
            priority={false}
            width={1920}
            height={1080}
            className="w-full h-full object-cover relative"
          />
        </div>
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
      <div className='absolute w-full bottom-0 translate-y-10'>
        <svg className="w-full h-full" viewBox="0 0 1920 194" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_241_2119" maskUnits="userSpaceOnUse" x="-5" y="0">
          <path d="M-0.434204 60.9999C-0.434204 60.9999 404.126 141.465 953.077 141.465C1502.03 141.465 1918.57 60.9999 1918.57 60.9999V194H-0.434204V60.9999Z" fill="white"/>
          <path d="M-1.43665 0.897095C-1.43665 0.897095 401.883 92.4746 952.077 107.3C1502.27 122.126 1921.91 52.7234 1921.91 52.7234L1918.34 186.032L-4.99997 134.206L-1.43665 0.897095Z" fill="white" fillOpacity="0.6"/>
          <path d="M-2.70947 29.1759C-2.70947 29.1759 402.011 115.744 952.757 123.745C1503.5 131.746 1922.57 57.1448 1922.57 57.1448L1920.64 190.487L-4.63103 162.518L-2.70947 29.1759Z" fill="white" fillOpacity="0.6"/>
          </mask>
          <g mask="url(#mask0_241_2119)">
          <rect x="-0.434326" y="-3.00003" width="1920" height="179" fill="white"/>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Header 