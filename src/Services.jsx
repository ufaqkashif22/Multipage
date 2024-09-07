// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context"


const Services = () => {
    const {services}=useGlobalContext();
    console.log(services)
        //    console.log(services[0].warrantyInformation)
  return (
    <>
     <section className="section-bar py-14 px-0 ">
    <h1 className="common-heading mb-8 capitalize text-[2rem] font-bold text-center">Our Services</h1>
    <div className="container mr-12 max-w-[86rem] m-auto grid gap-12 text-center grid-cols-3">
        {
            services.map((curElm)=>{
                const {thumbnail,id,title,description}=curElm
                return <div key={id} className="card w-[23rem] h-[26.8rem]">
                    <figure className="">
                        <img src={thumbnail} alt="mydata" className="h-48 mt-4 transition-all duration-200 ease-linear"></img>
                    </figure>
                    <div className="card-data">
                        <h3 className="mb-5 mx-0 mt-2 [0.8rem] text-[1.5rem]">{title}</h3>
                        <p className=" card-description  line-clamp-3 text-start text-[0.9rem] px-4">{description}</p>
                        <NavLink to="/services">
                            <button className="no-underline max-w-40 bg-transparent
             text-custom-indigo p-[0.7rem] px-[1.1rem] border-[0.1rem] border-custom-indigo  uppercase mt-4 
             text-center cursor-pointer hover:bg-custom-indigo hover:text-white">Read More</button>
                        </NavLink>
                    </div>
                </div> 
     ;
            })
        }
     </div> 
    </section> 

  </>
)
}

export default Services
