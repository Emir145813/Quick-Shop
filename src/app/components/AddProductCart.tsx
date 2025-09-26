"use client"
import {useCartPageContext } from './context/CartPageContext'
import { IAddToCart } from './Interfaces';



function AddProductCart( {id,color} :IAddToCart) {

  const {increaseHandler,decreaseHandler,productQuantity} = useCartPageContext();
  return (
    <div className='flex justify-center items-center'>
      <div>
        <button onClick={()=>increaseHandler(id)} className={`${color} rounded-xl text-white text-2xl cursor-pointer`}>
          <div className="w-12 h-12 flex items-center justify-center">
            +
          </div>
        </button>
      </div>
      <div>
        <span className='mx-3 font-sahel-semiBold text-2xl'> 
          {productQuantity(id)}
        </span>
      </div>
      <div>
        <button onClick={()=>decreaseHandler(id)} className={`${color} rounded-xl text-white text-2xl cursor-pointer`}>
          <div className="w-12 h-12 flex items-center justify-center">
              -
            </div>
        </button>
      </div>
    </div>
  )
}

export default AddProductCart