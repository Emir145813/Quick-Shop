import * as React from "react"
const Map = (props: React.SVGProps<SVGSVGElement>) => (
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
      strokeWidth={2.081}
      d="M2.892 8.46v10.05c0 1.962 1.396 2.767 3.092 1.796l2.43-1.383c.528-.3 1.407-.33 1.955-.052l5.43 2.716c.547.269 1.426.248 1.954-.052l4.478-2.56c.569-.331 1.044-1.137 1.044-1.798V7.128c0-1.962-1.396-2.767-3.092-1.797l-2.43 1.384c-.528.3-1.407.33-1.955.052l-5.43-2.706c-.547-.268-1.426-.248-1.954.052L3.936 6.674c-.579.33-1.044 1.136-1.044 1.787Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.081}
      d="M9.376 4.557v13.426M16.791 7.262v13.819"
      opacity={0.4}
    />
  </svg>
)
export default Map
