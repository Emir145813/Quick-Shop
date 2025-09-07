import * as React from "react"
const Header_Wave = (props : React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 1920 194"
    {...props}
  >
    <mask id="a" x={-5} y={0} maskUnits="userSpaceOnUse">
      <path
        fill="#fff"
        d="M-.434 61s404.56 80.465 953.511 80.465C1502.03 141.465 1918.57 61 1918.57 61v133H-.434V61Z"
      />
      <path
        fill="#fff"
        d="M-1.437.897S401.883 92.475 952.077 107.3c550.193 14.826 969.833-54.577 969.833-54.577l-3.57 133.309L-5 134.206-1.437.897Z"
      />
      <path
        fill="#fff"
        d="M-2.71 29.176s404.721 86.568 955.467 94.569c550.743 8.001 969.813-66.6 969.813-66.6l-1.93 133.342L-4.631 162.518l1.922-133.342Z"
      />
    </mask>
    <g mask="url(#a)">
      <path fill="#fff" d="M-.434-3h1920v179h-1920z" />
    </g>
  </svg>
)
export default Header_Wave
