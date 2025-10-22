import Link from "next/link"
import Quick_Shop from "../../../public/svgs/NavBar/Quick_Shop"
import Shoping_Cart from "../../../public/svgs/NavBar/Shoping_Cart"
import NavBarCartCounter from "./NavBarCartCounter"
import NavItems from "./NavItems"
import NavBarContainer from "./NavBarContainer"
import Profile_Tick from "../../../public/svgs/NavBar/Profile_Tick"


function NavBar() {

  return (
    <NavBarContainer>
      <div className="bg-linear-to-b from-black to-[#00000000] font-sahel-regular h-[126px] flex items-end justify-center relative">
        <div className="w-[90%] h-[80%] mx-auto flex justify-between items-center absolute">
          <NavItems/>
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Quick_Shop/>
          </div>
          <div className="relative h-full flex justify-end items-end pb-6">
            <ul className="flex gap-2.5 justify-left">
              <div>
                <li className=" w-[47.7px] h-[47.7px] flex justify-center items-center border-[1.33px] border-[#737373] rounded-[15.91px] hover:border-[#F97316]">
                  <Link href='/cart'><Shoping_Cart/></Link>
                </li>
              </div>
              <div>
                <NavBarCartCounter/>
                <div>
                  <li className="w-[47.px]">
                    <Link href='/signin'><Profile_Tick/></Link>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <hr className="w-[92%] mx-auto text-white border-[1.33px] rounded-2xl border-[#737373] h-[1.33px]" />
    </NavBarContainer>
  )
}

export default NavBar