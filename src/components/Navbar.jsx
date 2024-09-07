import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <nav>
      <div className="menu-icon"></div>
          <ul className="navbar-list flex gap-16">
            <li>
              <NavLink className="inline-block no-underline text-[1.1rem] uppercase text-black transition duration-300 ease-linear
                hover:text-[#8490ff]" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className=" inline-block no-underline text-[1.1rem] uppercase text-black transition duration-300 ease-linear
               hover:text-[#8490ff]" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className=" inline-block no-underline text-[1.1rem] uppercase text-black transition duration-300 ease-linear
                hover:text-[#8490ff]" to="/services">Service</NavLink>
            </li>
            <li>
              <NavLink className=" inline-block no-underline text-[1.1rem] uppercase text-black transition duration-300 ease-linear
               hover:text-[#8490ff]" to="/contact">Contact</NavLink>
            </li>
          </ul>
      </nav>
    </>
  )
}

export default Navbar;
