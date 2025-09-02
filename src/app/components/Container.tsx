type TContainer={
  children: React.ReactNode
}

function Container(children : TContainer) {
  return (
    <div className="w-[90%] m-auto">
      {children.children}
    </div>
  )
}

export default Container