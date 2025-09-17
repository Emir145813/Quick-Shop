"use client"
import Button from './Button'
import {useCartPageContext } from './context/CartPageContext'

const {} = useCartPageContext


function AddProductCart() {
  return (
    <div>
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
  )
}

export default AddProductCart