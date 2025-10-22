"use client"
import React from 'react'
import { useCartPageContext } from './context/CartPageContext'

function NavBarCartCounter() {
  const {TotalProductQty} = useCartPageContext()

  return (
    <div className={`text-sm text-white font-sahel-semiBold px-2 absolute top-5 -right-3 flex justify-center items-center rounded-3xl bg-amber-500 ${TotalProductQty == 0 ? "hidden":"inline" }`}>
      {TotalProductQty}
    </div>
  )
}

export default NavBarCartCounter