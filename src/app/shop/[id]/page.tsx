import Button from '@/app/components/Button'
import Container from '@/app/components/Container'
import Image from 'next/image'
import React from 'react'

type Tprops={
  params:Promise<{id : number}>
  searchparams:Promise<{}>
}


async function ProductPage(props :Tprops) {

  const {id} = await props.params;
  const infoPResult = await fetch(`http://localhost:4000/produts/${id}`);
  const infoP = await infoPResult.json();
  return (
    <Container>
      <div className='bg-amber-300 h-[50vh] mt-20 rounded-3xl grid grid-cols-12' >
        <div className='col-span-3 bg-amber-600/30 flex justify-center items-center' >
          <Image 
            src="/img/products img/1.png"
            alt='product image'
            width={500}
            height={500}
          />
        </div>
        <div className='col-span-6 bg-amber-950/80 px-3 py-5' >
          <h1 className='text-4xl font-sahel-semiBold bg-amber-900 p-4 mb-4'>
            اسم محصول اول
          </h1>
          <p className='text-xl font-sahel-regular bg-amber-700'>
            توضیحات محصولات این قسمت وارد میشود
            توضیحات محصولات این قسمت وارد میشود 
            توضیحات محصولات این قسمت وارد میشود
            توضیحات محصولات این قسمت وارد میشود
          </p>
        </div>
        <div className='col-span-3 grid grid-cols-1 grid-rows-2 justify-center items-center bg-amber-600/30' >
          <div className='h-full bg-amber-900 grid grid-rows-2'>
            <div className='bg-amber-200 flex justify-center items-end'>
              <span className='p-5 font-sahel-semiBold text-2xl bg-amber-800'>
                50000
              </span>
            </div>
            <div className='font-sahel-semiBold text-4xl bg-amber-400 flex justify-center'>
              <span >
                تومان
              </span>
            </div>
          </div>
          <div className='bg-amber-700 flex items-center justify-center h-full'>
            <Button color={"bg-green-500"}>
              +
            </Button >
            <span className='px-3 text-2xl font-sahel-semiBold bg-amber-200 py-2'>
              500
            </span>
            <Button color={"bg-red-500"}>
              -
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductPage