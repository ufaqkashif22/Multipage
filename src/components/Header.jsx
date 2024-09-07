import { NavLink } from "react-router-dom"
import Navbar from "./Navbar"


const Header = () => {
  return (
    <>
    <header className="py-0 px-[4.8rem] h-20 flex justify-between items-center bg-[rgb(249,249,255)]
">
      <NavLink to="/">
        <img src="./images/logo.png" alt="logo" className="h-auto max-w-[30%]"/>
      </NavLink>
      <Navbar/>
      </header>
      </>
  )
}

export default Header
