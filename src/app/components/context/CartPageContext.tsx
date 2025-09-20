"use client"
import { createContext, useContext, useState } from "react"
type TCartItems ={
  id : number,
  quantity : number
}
type CartPageContextProps ={
  children : React.ReactNode
}
type CartItem ={
  cartItems : TCartItems[]
  increaseHandler : (id : number)=>void
  decreaseHandler : (id : number)=>void
}
const CartPageContext = createContext({} as CartItem);

export const useCartPageContext = ()=>{
  return useContext(CartPageContext) 
}

function CartPageContextProvider({children} : CartPageContextProps) {

  const [cartItems ,setCartItems] = useState<TCartItems[]>([]);
  
  const increaseHandler = (id : number)=>{
    setCartItems((currentItem)=>{
      let notInCart = currentItem.find((item)=>(item.id == id)) ==null;
      if(notInCart){
        return [...currentItem , {id : id, quantity:1}]
      }else{
        return currentItem.map((item)=>{
          if(item.id == id){
            return {
              ...item ,
              quantity : item.quantity +1
            }
          }else{
            return item
          }
        })
      }
    })
  }
  const decreaseHandler = (id : number)=>{
    setCartItems((currentItem)=>{
      let notInCart = currentItem.find((item)=>(item.id == id)) ==null;
      if(notInCart){
        return [...currentItem , {id : id, quantity:1}]
      }else{
        return currentItem.map((item)=>{
          if(item.id == id){
            return {
              ...item ,
              quantity : item.quantity -1
            }
          }else{
            return item
          }
        })
      }
    })
  }


  return (
    <CartPageContext.Provider value={{cartItems ,increaseHandler ,decreaseHandler}}>
      {children}
    </CartPageContext.Provider>
  )
}

export default CartPageContextProvider