import React from 'react'
import Image from 'next/image'
import AddProductCart from './AddProductCart'

function ProductCart() {

  return (
    <div className='bg-[#FAFAFA] shadow-[0px_0px_8px_2px_rgba(0,_0,_0,_0.1)] my-5 rounded-3xl grid grid-cols-12'>
      <div className='col-span-3 border-l-[1.33px] border-gray-300 flex justify-center items-center' >
        <Image
        src="/img/products/image_2.png"
        alt='Product Image'
        width={300}
        height={300}
        />
      </div>
      <div className='col-span-9 py-10 px-5 flex flex-col gap-5' >
        <div className='text-2xl font-sahel-semiBold'>
          اسم محصول اینجاست
        </div>
        <div className='text-xl font-sahel-regular text-gray-800 flex flex-col'>
          <span>
            قیمت : 65090 تومان
          </span>
        </div>
        <div>
        <div>
          {/* <AddProductCart/> */}
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCart