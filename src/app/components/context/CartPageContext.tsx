"use client"
import { createContext, useContext, useEffect, useState } from "react"
import { CartPageContextProps, TCartItems } from "../Interfaces"

type CartItem ={
  cartItems : TCartItems[]
  increaseHandler : (id : number)=>void
  decreaseHandler : (id : number)=>void
  productQuantity : (id : number)=>number
  TotalProductQty : number
}
const CartPageContext = createContext({} as CartItem);

export const useCartPageContext = ()=>{
  return useContext(CartPageContext) 
}

function CartPageContextProvider({children} : CartPageContextProps) {

  const [cartItems ,setCartItems] = useState<TCartItems[]>([]);
  const increaseHandler = (id : number)=>{
    setCartItems((currentItem)=>{
      let notInCart = currentItem.find((item)=>(item.id == id)) == null;
      if(notInCart){
        return [...currentItem , {id : Number(id), quantity:1}]
      }else{
        return currentItem.map((item)=>{
          if(item.id == id){
            return {
              ...item ,
              quantity : item.quantity + 1
            }
          }else{
            return item
          }
        })
      }
    })
  }
  const decreaseHandler = (id : number)=>{
    setCartItems((cartItems)=>{
      return cartItems.map((item)=>{
        if(item.id == id){
          return {
            ...item ,
            quantity : item.quantity - 1
          }
        }else{
          return item
        }
      }).filter((item)=>item.quantity >0 )
    })
  }


  const productQuantity = (id : number)=>{
    return cartItems.find((item)=>(item.id == id))?.quantity || 0;
  }
  const TotalProductQty = cartItems.reduce((totalQty ,item)=>{
    return totalQty + item.quantity
  },0)

  useEffect(()=>{
    const SavedCartData = localStorage.getItem("saveCartItems")
    if(SavedCartData){
      setCartItems(JSON.parse(SavedCartData))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("saveCartItems",JSON.stringify(cartItems))
  },[cartItems])


  return (
    <CartPageContext.Provider value={{cartItems ,increaseHandler ,decreaseHandler,productQuantity,TotalProductQty}}>
      {children}
    </CartPageContext.Provider>
  )
}

export default CartPageContextProvider