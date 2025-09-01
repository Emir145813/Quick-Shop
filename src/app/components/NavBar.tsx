import Home_logo from "../../../public/svgs/NavBar/Home"
import ContactUS_logo from "../../../public/svgs/NavBar/ContactUS"
import Shop_logo from "../../../public/svgs/NavBar/Shop"
import AboutUS_logo from "../../../public/svgs/NavBar/AboutUS"
function NavBar() {
  return (
    <div className="h-[126px] bg-amber-50">
      <div>
        <ul>
          <li>
            <Home_logo color="#F97316"/>
            <ContactUS_logo color="#F97316"/>
            <Shop_logo color="#F97316"/>
            <AboutUS_logo color="#F97316"/>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar