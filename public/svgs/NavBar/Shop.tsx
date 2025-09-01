import * as React from "react"

type TSvg = {
  props ?: React.SVGProps<SVGSVGElement>
  color ?: string
}


const Shop = (props : TSvg) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.989}
      d="M2.824 21.914h19.89M17.74 2.025H7.797c-2.983 0-3.978 1.78-3.978 3.978v15.911h17.9V6.003c0-2.198-.994-3.978-3.977-3.978Z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.989}
      d="M7.796 16.445h2.984M14.757 16.445h2.984M7.796 11.97h2.984M14.757 11.97h2.984M7.796 7.494h2.984M14.757 7.494h2.984"
      opacity={0.4}
    />
  </svg>
)
export default Shop
