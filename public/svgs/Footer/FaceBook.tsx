import * as React from "react"
const FaceBook = (props : React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <path
      stroke="#404040"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2.081}
      d="M16.44 10.75v3.41h3.04a.34.34 0 0 1 .336.416l-.44 2.196a.345.345 0 0 1-.335.278h-2.6v8.38h-3.468v-8.38h-1.965a.34.34 0 0 1-.347-.347v-2.196a.34.34 0 0 1 .347-.347h1.965v-3.757a3.463 3.463 0 0 1 3.468-3.467h3.12a.34.34 0 0 1 .347.346v2.774a.34.34 0 0 1-.347.347h-2.774a.34.34 0 0 0-.346.347Z"
      opacity={0.4}
    />
    <path
      stroke="#404040"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.081}
      d="M17.596 25.43h-6.935c-5.78 0-8.091-2.312-8.091-8.092v-6.935c0-5.78 2.311-8.091 8.091-8.091h6.935c5.78 0 8.092 2.311 8.092 8.09v6.936c0 5.78-2.312 8.092-8.092 8.092Z"
    />
  </svg>
)
export default FaceBook
