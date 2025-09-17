"use client"
import { createContext, useState } from "react"
type TCartItem ={
  id : number,
  quantity : number
}
type CartPageContextProps ={
  children : React.ReactNode
}
const CartPageContext = createContext({});

function CartPageContextProvider({children} : CartPageContextProps) {

  const [cart ,setcart] = useState<TCartItem[]>([])

  return (
    <CartPageContext.Provider value={{cart}}>
      {children}
    </CartPageContext.Provider>
  )
}

export default CartPageContextProvider