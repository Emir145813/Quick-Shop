"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { IChildren } from './Interfaces'

function NavBarContainer(children : IChildren) {
  const pathName = usePathname()
  return (
    <div className={`${pathName === "/" ? "absolute w-full z-10" : "none"}`}>
      {children.children}
    </div>
  )
}

export default NavBarContainer