import React from 'react'
import Container from '../components/Container'
import ProductCart from '../components/ProductCart'

function Cart() {
  return (
    <div>
      <Container> 
        <div>
          <h1 className='my-5 font-sahel-semiBold text-3xl'>
            سبد خرید
          </h1>
        </div>
        <div>
          <ProductCart/>
        </div>
        <div>
          <div>
            <h1 className='my-5 font-sahel-semiBold text-3xl'>
              کد تخفیف 
            </h1>
          </div>
          <div className=' my-5 rounded-3xl'>
            <div className='py-5 font-sahel-regular'>
              <input className='bg-white border-1 border-gray-300 p-2 rounded-lg focus:outline-orange-500' placeholder='کد تخیف را وارد کنید ' type="text" />
              <button className='bg-gradient-to-r from-orange-400 to-orange-500 p-2 mx-2 rounded-lg text-white cursor-pointer'>
                اعمال
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 className='my-5 font-sahel-semiBold text-3xl'>
            مجموع هزینه های سبد خرید
          </h1>
        </div>
        <div className='bg-[#FAFAFA] shadow-[0px_0px_8px_2px_rgba(0,_0,_0,_0.1)] my-5 rounded-3xl'>
          <div className='h-full py-5 font-sahel-regular text-[22px] grid grid-cols-1 gap-5'>
            <span>
              قیمت کل بدون احتساب تخفیف : 700000 تومان
            </span>
            <span>
              سود شما از این خرید : 20000 تومان
            </span>
            <span>
              قیمت با احتساب تخفیف : 500000 تومان
            </span>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Cart