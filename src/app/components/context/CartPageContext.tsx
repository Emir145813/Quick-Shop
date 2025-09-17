"use client"
import { createContext, useContext, useState } from "react"
type TCartItems ={
  id : number,
  quantity : number
}
type CartPageContextProps ={
  children : React.ReactNode
}
type CartItemsContext ={
  cartItems : TCartItems[]
}
const CartPageContext = createContext({} as CartItemsContext);

export const useCartPageContext = ()=>{
  return useContext(CartPageContext) 
}

function CartPageContextProvider({children} : CartPageContextProps) {

  const [cartItems ,setCartItems] = useState<TCartItems[]>([])

  return (
    <CartPageContext.Provider value={{cartItems}}>
      {children}
    </CartPageContext.Provider>
  )
}

export default CartPageContextProvider