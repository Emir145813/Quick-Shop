"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import AddProductCart from './AddProductCart'
import axios from 'axios'
import { IProduct, TCartItems } from './Interfaces'


function ProductCart({id,quantity}: TCartItems) {

  const [data, setData] = useState({} as IProduct)

  useEffect(()=>{
    axios(`http://localhost:4000/produts/${id}`)
      .then((response) =>{const {data} = response
      setData(data)
    })
  },[])


  return (
    <div className='bg-[#FAFAFA] shadow-[0px_0px_8px_2px_rgba(0,_0,_0,_0.1)] my-5 rounded-3xl grid grid-cols-12'>
      <div className='col-span-3 border-l-[1.33px] border-gray-300 flex justify-center items-center' >
        <Image 
          src={`/img/products/${data.image_src}`}
          alt='product image'
          width={300}
          height={300}
        />
      </div>
      <div className='col-span-9 py-10 px-5 flex flex-col gap-5' >
        <div className='text-2xl font-sahel-semiBold'>
          {data.title}
        </div>
        <div className='text-2xl font-sahel-semiBold'>
          تعداد : {quantity}
        </div>
        <div className='text-xl text-gray-800 flex flex-col font-sahel-semiBold'>
          قیمت : {data.price?.toLocaleString()}
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