import { NavLink } from "react-router-dom"
import Navbar from "./Navbar"


const Header = () => {
  return (
    <>
    <header className="py-0 px-[4.8rem] h-20 flex justify-between items-center bg-[rgb(249,249,255)]
">
      <NavLink to="/">
        <img src="./images/3H1f7H-LogoMakr.png" alt="logo" className="h-auto max-w-[80%]"/>
      </NavLink>
      <Navbar/>
      </header>
      </>
  )
}

export default Header
