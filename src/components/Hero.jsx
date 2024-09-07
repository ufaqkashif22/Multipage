import { NavLink } from "react-router-dom"
import {useGlobalContext } from "../context"


const Hero = ({name,images}) => {
 
  

  const {fName,age}=useGlobalContext()
  return (
    <>
      <section className="py-14 px-0">
        <div className="container max-w-[86rem] m-auto grid gap-12 grid-cols-2">
            <div className="section-hero-data flex flex-col  justify-center">
                <p className="top-data uppercase font-medium text-[1.2rem] text-[#8490ff] ">this is me</p>
                <h1 className="hero-hading uppercase text-[3rem]">{name.split(" ")[0]} <br /> {name.split(" ")[1]}</h1>
                <p className="hero-para mt-6 mb-6 max-w-[60rem]">i am a {fName} {age}. A frontend developer,nd freelancer.
                A<br/> frontend developer,nd freelancer.A frontend developer,nd freelancer </p> 

            <button className="no-underline max-w-40 bg-[rgb(98,84,243)]
             text-[rgb(255,255,255)] p-[0.7rem] px-[2.1rem] border-0 uppercase 
             text-center cursor-pointer transition-all duration-300 ease-in
             hover:shadow-[0_1.2rem_1.2rem_0_rgba(132,144,255,0.3)] hover:scale-95 ">
               
                <NavLink className="hire no-underline text-white text-[1.4rem]" to="/contact">Hire me</NavLink>
            </button>     
            </div>
          
            {/* for image */}
            <main className="section-image flex justify-center items-center">
                <picture className="text-center ">
                    <img src={images} alt="mobile" className="max-w-[56%] ml-20"/>
                </picture>
            </main>
        </div>
      </section>
    </>
  )
}

export default Hero
