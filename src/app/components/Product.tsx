import React from 'react'
import Image from 'next/image'
import { IProduct } from '../shop/page'


function Product({image_src,title,pclass}: IProduct) {
  return (
    <div className='h-[543px] w-[400px] bg-white rounded-[24px] p-[21px]'>
      <div className='w-[359px] h-[302.86px] bg-amber-300 rounded-[16.66px] mb-[23.13]'>
        <Image
          src={`${image_src}`}
          alt='Product Image'
          width={359}
          height={302.87}
        />
      </div>
      <div>
        <p className='font-sahel-semiBold text-[24px] text-[#404040] bg-amber-400 mb-[24px]'>
          {title}
        </p>
        <div className='flex mb-[29.5px]'>
          <div className='ml-[7.02px] text-[22px] '>[--]</div>
          <div>
            <p className='font-sahel-regular text-[#737373] text-[22px]'>
              {pclass}
            </p>
          </div>
        </div>
          <div className='h-[51.50px] flex justify-between items-start'>
            <div className='w-[93px] h-[51px] bg-amber-500 rounded-[16px] flex justify-center items-center'>
              <button>Add</button>
            </div>
            <span className='text-[24px] font-sahel-regular text-[#404040]'>
              466.666
            </span>
          </div>
      </div>
    </div>
  )
}

export default Product