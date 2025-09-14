import React from 'react'
import Image from 'next/image'
import { IProduct } from '../shop/page'
import Classification from '../../../public/svgs/Products/Classification'
import Cart_Btn_1 from '../../../public/svgs/Products/Cart_Btn_1'
import Cart_Btn_2 from '../../../public/svgs/Products/Cart_Btn_2'


function Product({image_src,title,pclass,price}: IProduct) {
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
        <div className='flex mb-[29.5px] bg-amber-200'>
          <div className='ml-[7.02px] text-[22px] bg-amber-300 flex items-center justify-center'>
            <Classification/>
          </div>
          <div>
            <p className='font-sahel-regular text-[#737373] text-[22px] bg-amber-400'>
              {pclass}
            </p>
          </div>
        </div>
          <div className='h-[51.50px] flex justify-between items-start'>
            <div className='w-[93px] h-[51px] bg-gradient-to-r from-orange-400 to-orange-500 rounded-[16px] flex justify-center items-center'>
              <button>
                <div className='flex gap-2'>
                  <div className='flex justify-center items-center'>
                    <Cart_Btn_2/>
                  </div>
                  <div className='flex justify-center items-center'>
                    <Cart_Btn_1/>
                  </div>
                  </div>
              </button>
            </div>
            <span className='text-[24px] font-sahel-regular text-[#404040]'>
              {price}
            </span>
          </div>
      </div>
    </div>
  )
}

export default Product