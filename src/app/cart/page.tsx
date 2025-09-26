"use client"
import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import ProductCart from '../components/ProductCart'
import { useCartPageContext } from '../components/context/CartPageContext'
import axios from 'axios'
import { IProduct } from '../components/Interfaces'

function Cart() {

  const {cartItems} = useCartPageContext();
  const [data, setData] = useState<IProduct[]>([])
  const [discountValidation,setdiscountValidation] = useState('')
  const [finalPrice, setFinalPrice] = useState(0)
  const [discountMount , setDiscountMount] = useState(0)

  let totalPrice = 
      cartItems.reduce((totalPrice,items)=>{
      let porchasedProducts = data.find((product)=>product.id == items.id) 
      return totalPrice + (porchasedProducts?.price || 0) * items.quantity
    },0)

  const discountHandler = ()=>{
    axios(`http://localhost:4000/discount?code=${discountValidation}`)
      .then((response)=>{ const data = response.data
      let discountMount = data[0].perc || 0
      let discount = totalPrice * (discountMount/100)
      setFinalPrice(totalPrice - discount)
      setDiscountMount(discount)
    })
  }
  useEffect(()=>{
    axios("http://localhost:4000/produts/")
      .then((response) =>{const {data} = response
      setData(data)
    })
  },[])
  return (
    <div>
      <Container> 
        {
          cartItems.length != 0 ?
          <div>
          <div>
            <h1 className='my-5 font-sahel-semiBold text-3xl'>
              سبد خرید
            </h1>
          </div>
          <div>
            {
              cartItems.map((item)=>(
                <ProductCart key={item.id} {...item}/>
              ))
            }
          </div>
          <div>
            <div>
              <h1 className='my-5 font-sahel-semiBold text-3xl'>
                کد تخفیف 
              </h1>
            </div>
            <div className=' my-5 rounded-3xl'>
              <div className='py-5 font-sahel-semiBold'>
                <input onChange={(e)=>setdiscountValidation(e.target.value)} className='bg-white border-1 border-gray-300 p-2 rounded-lg focus:outline-orange-500' placeholder='کد تخیف را وارد کنید ' type="text" />
                <button onClick={discountHandler} className='bg-gradient-to-r from-orange-400 to-orange-500 p-2 mx-2 rounded-lg text-white cursor-pointer'>
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
          <div className='my-5'>
            <div className='h-full py-5 font-sahel-regular text-[22px] grid grid-cols-1 gap-5'>
              <span>
                قیمت نهایی : {totalPrice.toLocaleString()}
              </span>
              <span className={`${(discountMount == 0 ? "hidden": "none")}`}>
                سود شما از این خرید : {discountMount.toLocaleString()}
              </span>
              <span className={`${(discountMount == 0 ? "hidden": "none")}`}>
                قیمت با احتساب تخفیف : {finalPrice.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
        :
        <div className='flex flex-col justify-center items-center p-50'>
          <h1  className='font-sahel-semiBold text-3xl text-gray-800'>سبد خرید شما خالی است</h1>
        </div>
        }
      </Container>
    </div>
  )
}

export default Cart