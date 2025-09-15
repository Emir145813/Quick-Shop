import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"

export type IChildren ={
  children : React.ReactNode
}

function Layout({ children }: IChildren) {
  return (
    <div>
      <NavBar/>    
      {children}
      <Footer/>
    </div>
  )
}

export default Layout