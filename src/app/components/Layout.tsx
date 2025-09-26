import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { IChildren } from "./Interfaces"



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