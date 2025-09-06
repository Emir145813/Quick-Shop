import React from "react"

type IChildren ={
  children : React.ReactNode
}

function Layout({ children }: IChildren) {
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout