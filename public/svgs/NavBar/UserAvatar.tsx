import * as React from "react"
const UserAvatar = (props : React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <path
      stroke="#FFFFFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.989}
      d="m16.847 22.225 1.773 1.773 3.547-3.546M14.187 12.682a2.115 2.115 0 0 0-.385 0A5.157 5.157 0 0 1 8.82 7.513a5.166 5.166 0 0 1 5.169-5.18 5.183 5.183 0 0 1 5.18 5.18c0 2.8-2.217 5.075-4.982 5.169Z"
      opacity={0.4}
    />
    <path
      stroke="#FFFFFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.989}
      d="M13.988 25.445c-2.123 0-4.235-.537-5.845-1.61-2.823-1.89-2.823-4.97 0-6.848 3.209-2.147 8.47-2.147 11.679 0"
    />
  </svg>
)
export default UserAvatar
