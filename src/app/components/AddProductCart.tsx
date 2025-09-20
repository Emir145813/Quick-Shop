"use client"
import {useCartPageContext } from './context/CartPageContext'

interface IAddToCart{
  color ?: string
  id : number
}

function AddProductCart( {id,color} :IAddToCart) {

  const {cartItems,increaseHandler,decreaseHandler} = useCartPageContext();
  console.log(cartItems);
  return (
    <div>
      <button onClick={()=>increaseHandler(id)} className={`${color} rounded-xl text-white text-2xl cursor-pointer`}>
        <div className="w-12 h-12 flex items-center justify-center">
          +
        </div>
      </button>
      <span className='mx-3'> 
      تعداد : 3 
      </span>
      <button onClick={()=>decreaseHandler(id)} className={`${color} rounded-xl text-white text-2xl cursor-pointer`}>
          <div className="w-12 h-12 flex items-center justify-center">
            +
          </div>
      </button>
    </div>
  )
}

export default AddProductCart