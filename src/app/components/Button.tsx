
interface IButton{
  color?: string,
  children?: React.ReactNode
}

function Button({children , color} : IButton) : React.JSX.Element {
  return (
      <button className={`${color} rounded-xl text-white text-2xl`}>
        <div className="w-12 h-12 flex items-center justify-center">
          {children}
        </div>
      </button>
  )
}

export default Button