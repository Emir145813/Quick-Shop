"use client"
import Image from 'next/image'
import AddProductCart from './AddProductCart'
import { IProduct, TCartItems } from './Interfaces'
import { useEffect, useState } from 'react'
import axios from 'axios'


function ProductCart({id}: TCartItems) {

  const [data, setData] = useState<IProduct>()
  

  useEffect(()=>{
    axios("http://localhost:3000/api/products")
      .then((response) =>{const data = response.data;
      const selected = data.find( (item : IProduct)  => item.pid === id);
      setData(selected);
    })
  },[id])


  return (
    <div className='border-y-[1.33px] border-gray-200 py-5 my-5 grid grid-cols-12'>
      <div className='col-span-3 border-l-[1.33px] border-gray-300 flex justify-center items-center' >
        <Image 
          src={`/img/products/${data?.image_src}`}
          alt='product image'
          width={300}
          height={300}
        />
      </div>
      <div className='col-span-9 py-10 px-5 flex flex-col gap-5' >
        <div className='text-2xl font-sahel-semiBold'>
          {
            data?.title
          }
        </div>
        <div className='text-xl text-gray-800 flex flex-col font-sahel-semiBold'>
          قیمت : {data?.price?.toLocaleString()} تومان 
        </div>
        <div>
        <div className='flex items-start'>
          <AddProductCart id={id} color='bg-gradient-to-r from-orange-400 to-orange-500' />
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCart