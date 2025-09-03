import * as React from "react"

type TSvg = {
  props ?: React.SVGProps<SVGSVGElement>
  color ?: string
  className ?: string
}


const Home_logo = (props: TSvg) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={30}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.989}
      d="M13.212 4.16 4.79 10.905c-.948.754-1.556 2.346-1.349 3.538l1.617 9.675C5.348 25.844 7 27.24 8.752 27.24h13.613c1.738 0 3.403-1.41 3.695-3.123l1.617-9.675c.194-1.192-.414-2.784-1.35-3.537l-8.423-6.734c-1.3-1.045-3.403-1.045-4.692-.012Z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.989}
      d="M15.558 19.572a3.039 3.039 0 1 0 0-6.078 3.039 3.039 0 0 0 0 6.078Z"
      opacity={0.4}
    />
  </svg>
)
export default Home_logo