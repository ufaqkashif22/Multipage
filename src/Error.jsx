import { NavLink } from "react-router-dom"


const Error = () => {
  return (
    <>
    <section className=" pt-6 pb-14 flex flex-col items-center justify-center ">
     <img className="h-[26rem] w-[34rem]" src="../images/error.svg" alt="error" /> 
     <NavLink to="/">
     <button className="no-underline text-[1rem] bg-custom-indigo
    text-white p-[0.7rem] px-[1.1rem] border-[0.1rem] border-custom-indigo  uppercase mt-4 
    text-center cursor-pointer">Go Back</button>
    </NavLink>
             </section>
    </>
  )
}

export default Error
