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
import { useCartPageContext } from "./context/CartPageContext"


function NavBar() {
  const {TotalProductQty} = useCartPageContext()
  const pathName =usePathname();
  
  const navItems = [
  {id:1, name: "صفحه اصلی", href: "/", icon: <Home_logo color={pathName === "/" ? "oklch(70.5% 0.213 47.604)" : "#fff"}/> },
  {id:2, name: "فروشگاه", href: "/shop", icon: <Shop_logo color={pathName === "/shop" ? "oklch(70.5% 0.213 47.604)" : "#fff"}/> },
  {id:3, name: "درباره ما", href: "/about-us", icon: <AboutUS_logo color={pathName === "/about-us" ? "oklch(70.5% 0.213 47.604)" : "#fff"}/> },
  {id:4, name: "تماس با ما", href: "/contact-us", icon: <ContactUS_logo color={pathName === "/contact-us" ? "oklch(70.5% 0.213 47.604)" : "#fff"}/> },
];


  return (
    <div className={`${pathName === "/" ? "absolute w-full z-10" : "none"}`}>
      <div className="bg-linear-to-b from-black to-[#00000000] font-sahel-regular h-[126px] flex items-end justify-center relative">
        <div className="w-[90%] h-[80%] mx-auto flex justify-between items-center absolute">
          <div className="flex justify-center items-end h-full ">
            <ul className="flex gap-5">
              {navItems.map((item)=>(
                <li key={item.name}>
                  <Link className=" flex justify-center items-center gap-1 mb-6" href ={item.href}>
                    {item.icon}
                    <span className={pathName === item.href ? "text-orange-500 text-[20px]" : "text-white text-[20px] "}>
                      {item.name}
                    </span>
                  </Link>
                  <div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Quick_Shop/>
          </div>
          <div className="relative h-full flex justify-end items-end pb-6">
            <ul className="flex gap-2.5 justify-left">
              <div>
                <li className=" w-[47.7px] h-[47.7px] flex justify-center items-center border-[1.33px] border-[#737373] rounded-[15.91px] ">
                  <Link href='/cart'><Shoping_Cart/></Link>
                </li>
              </div>
              <div className={`text-sm text-white font-sahel-semiBold px-2 absolute top-5 -right-3 flex justify-center items-center rounded-3xl bg-amber-500 ${TotalProductQty == 0 ? "hidden":"inline" }`}>
                {TotalProductQty}
              </div>
              <li className="w-[47.px]">
                <Link href='/'><Profile_Tick/></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="w-[92%] mx-auto text-white border-[1.33px] rounded-2xl border-[#737373] h-[1.33px]" />
    </div>
  )
}

export default NavBar