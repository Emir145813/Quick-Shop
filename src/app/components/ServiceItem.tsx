import React from 'react'
import Image from 'next/image'
import { TItems } from './Interfaces';



function ServiceItem({marginTop,title,desc,isrc} : TItems) {
  console.log(isrc);
  
  return (
    <div className={`w-[235px] h-[219.11px] ${marginTop}`}>
      <div className='h-full w-full'>
        <div className='h-[50%] flex justify-center'>
          <div className='h-[94.14299774169922px] w-[88.60377502441406px] '>
            <Image 
              src={`/img/Services/${isrc}`}
              alt="Service Image"
              width={500}
              height={500}  
            />
          </div>
        </div>
        <div className='flex flex-col justify-between h-[50%] '>
          <div className='w-full h-[34px] text-[22px] text-[#404040] font-sahel-semiBold text-center'>
            <p>
              {title}
            </p>
          </div>
          <div className=' w-full h-[63px] text-[20px] font-sahel-regular text-center text-[#737373]'>
            <p>
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem