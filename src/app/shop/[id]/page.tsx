import Container from '@/app/components/Container'
import Image from 'next/image'
import React from 'react'
import AddProductCart from '@/app/components/AddProductCart'
import { Iprops } from '@/app/components/Interfaces';



async function ProductPage(props :Iprops) {

  const {id} = await props.params;
  const infoPResult = await fetch(`http://localhost:4000/produts/${id}`);
  const infoP = await infoPResult.json();
  return (
    <Container>
      <div className='bg-[#FAFAFA] shadow-[0px_0px_8px_2px_rgba(0,_0,_0,_0.1)] mt-20 rounded-3xl grid grid-cols-12' >
        <div className='col-span-3 flex justify-center items-center' >
          <Image 
            src={`/img/products/${infoP.image_src}`}
            alt='product image'
            width={500}
            height={500}
          />
        </div>
        <div className='col-span-6 flex flex-col justify-center' >
          <div className=' h-[80%] px-3 py-5 border-x-[1.33px] border-gray-500' >
            <h1 className='text-4xl font-sahel-semiBold p-4 mb-4'>
              {infoP.title}
            </h1>
            <div className='py-2 font-sahel-semiBold'>
              <h2>
                مشخصات کلیدی
              </h2>
            </div>
            <div className='text-xl font-sahel-regular text-gray-800 flex '>
              <ul>
                {infoP.specs.spec.map((item: {key : string , value : string ,id : number}) => (
                  <li key={item.id} className='p-2 border-b border-gray-500'>
                    <span className='font-sahel-semiBold'>
                      {item.key} :
                    </span>
                    <span>
                      {item.value}  
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='col-span-3 grid grid-cols-1 grid-rows-2 justify-center items-center' >
          <div className='h-full grid grid-rows-2'>
            <div className='flex justify-center items-end'>
              <span className='p-5 font-sahel-semiBold text-3xl'>
                {infoP.price}
              </span>
            </div>
            <div className='font-sahel-semiBold text-3xl flex justify-center'>
              <span >
                تومان
              </span>
            </div>
          </div>
          <div className='flex items-center justify-center h-full'>
            <AddProductCart id={id} color='bg-gradient-to-r from-orange-400 to-orange-500'/>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductPage