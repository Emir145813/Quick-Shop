import React from "react"
import NavBar from "./NavBar"

type IChildren ={
  children : React.ReactNode
}

function Layout({ children }: IChildren) {
  return (
    <div>
      <div className="absolute w-full z-10">
      <NavBar/>
      </div>
      {children}
    </div>
  )
}

export default Layout