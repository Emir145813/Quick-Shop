import React from "react"
import NavBar from "./NavBar"

type IChildren ={
  children : React.ReactNode
}

function Layout({ children }: IChildren) {
  return (
    <div>
      <NavBar/>    
      {children}
    </div>
  )
}

export default Layout