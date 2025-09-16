import * as React from "react"
const Email = (props:React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2.081}
      d="M3.053 9.604c0-3.614 2.068-5.164 5.17-5.164h10.342c3.103 0 5.171 1.55 5.171 5.164v7.23c0 3.614-2.068 5.163-5.17 5.163H8.223"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2.081}
      d="m18.565 10.12-3.237 2.583c-1.065.846-2.813.846-3.878 0L8.224 10.12M3.053 17.866h6.205M3.053 13.735h3.102"
      opacity={0.4}
    />
  </svg>
)
export default Email
