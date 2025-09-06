"use client"
import Home_logo from "../../../public/svgs/NavBar/Home"
import ContactUS_logo from "../../../public/svgs/NavBar/ContactUS"
import Shop_logo from "../../../public/svgs/NavBar/Shop"
import AboutUS_logo from "../../../public/svgs/NavBar/AboutUS"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Quick_Shop from "../../../public/svgs/NavBar/Quick_Shop"
import Profile_Tick from "../../../public/svgs/NavBar/Profile_Tick"
import Shoping_Cart from "../../../public/svgs/NavBar/Shoping_Cart"


function NavBar() {
  
  const pathName =usePathname();
  
  const navItems = [
  {id:1, name: "صفحه اصلی", href: "/", icon: <Home_logo color={pathName === "/" ? "oklch(70.5% 0.213 47.604)" : "#fff"}/> },
  {id:2, name: "فروشگاه", href: "/shop", icon: <Shop_logo color={pathName === "/shop" ? "oklch(70.5% 0.213 47.604)" : "#fff"}/> },
  {id:3, name: "درباره ما", href: "/about-us", icon: <AboutUS_logo color={pathName === "/about-us" ? "oklch(70.5% 0.213 47.604)" : "#fff"}/> },
  {id:4, name: "تماس با ما", href: "/contact-us", icon: <ContactUS_logo color={pathName === "/contact-us" ? "oklch(70.5% 0.213 47.604)" : "#fff"}/> },
];


  return (
    <div className="bg-linear-to-b from-black to-[#00000000] font-sahel-regular h-[126px] relative flex items-end justify-end">
      <div className="border-b-[1.33px] border-[#737373] w-[92%] h-[100%] m-auto flex justify-center items-end ">
        <div className="w-[90%] h-[80%] my-auto flex justify-between items-start absolute ">
          <div className="flex justify-center items-end h-full pb-6">
            <ul className="flex gap-5">
              {navItems.map((item)=>(
                <li key={item.name}>
                  <Link className=" flex justify-center items-center gap-1 h-full" href ={item.href}>
                    {item.icon}
                    <span className={pathName === item.href ? "text-orange-500 text-[20px]" : "text-white text-[20px] "}>
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Quick_Shop/>
          </div>
          <div className="h-full flex justify-end items-end pb-6">
            <ul className="flex gap-2.5 justify-left items-center">
              <li className="w-[47.7px] h-[47.7px] flex justify-center items-center border-[1.33px] border-[#737373] rounded-[15.91px] ">
                <Link href='/cart'><Shoping_Cart/></Link>
              </li>
              <li className="w-[47.px]">
                <Link href='/'><Profile_Tick/></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar