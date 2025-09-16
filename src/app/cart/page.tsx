import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'

function Cart() {
  return (
    <div className='h-[120vh]'>
      <Container> 
        <div className='bg-[#FAFAFA] shadow-[0px_0px_8px_2px_rgba(0,_0,_0,_0.1)] mt-20 rounded-3xl grid grid-cols-12'>
          <div className='col-span-3 bg-amber-500/30' >
            {/* image */}
            <p>
              image
            </p>
          </div>
          <div className='col-span-9 py-10 px-5 bg-amber-400/30 flex flex-col gap-5' >
            <div className='text-2xl font-sahel-semiBold bg-amber-600'>
              اسم محصول اینجاست
            </div>
            <div className='text-xl font-sahel-regular text-gray-800 flex flex-col bg-amber-500'>
              <span>
                قیمت : 65090 تومان
              </span>
            </div>
            <div className='bg-amber-400'>
              <Button color='bg-amber-500' >
                +
              </Button>
              <span className='mx-3'>
                تعداد : 3 
              </span>
              <Button color='bg-amber-500'>
                -
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Cart