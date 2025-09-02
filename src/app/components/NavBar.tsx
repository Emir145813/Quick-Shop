"use client"
import Home_logo from "../../../public/svgs/NavBar/Home"
import ContactUS_logo from "../../../public/svgs/NavBar/ContactUS"
import Shop_logo from "../../../public/svgs/NavBar/Shop"
import AboutUS_logo from "../../../public/svgs/NavBar/AboutUS"
import Link from "next/link"
import { usePathname } from "next/navigation"


function NavBar() {
  
  const pathName =usePathname();
  
  const navItems = [
  {id:1, name: "صفحه اصلی", href: "/", icon: <Home_logo color={pathName === "/" ? "oklch(70.5% 0.213 47.604)" : "#fff"}/> },
  {id:2, name: "فروشگاه", href: "/shop", icon: <Shop_logo color={pathName === "/shop" ? "oklch(70.5% 0.213 47.604)" : "#fff"}/> },
  {id:3, name: "درباره ما", href: "/about-us", icon: <AboutUS_logo color={pathName === "/about-us" ? "oklch(70.5% 0.213 47.604)" : "#fff"}/> },
  {id:4, name: "تماس با ما", href: "/contact-us", icon: <ContactUS_logo color={pathName === "/contact-us" ? "oklch(70.5% 0.213 47.604)" : "#fff"}/> },
];


  return (
    <div className="bg-yellow-500 font-sahel-regular h-[126px]">
      <div className="w-[90%] m-auto flex">
        <div>
          <ul className="flex gap-4">
            {navItems.map((item)=>(
              <li key={item.name}>
                <Link className="bg-amber-800 flex justify-center items-center border-2 border-green-300" href ={item.href}>
                  {item.icon}
                  <span className={pathName === item.href ? "text-orange-500 text-[20px]" : "text-white text-[20px]"}>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span>
            logo
          </span>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default NavBar