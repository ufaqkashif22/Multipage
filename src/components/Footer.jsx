import { NavLink } from "react-router-dom"
 import { FaDiscord,FaInstagram,FaYoutubeSquare  } from "react-icons/fa";


const Footer = () => {
  
  return (
    <>
           <section className="contact-short">
        <div className="flex items-center justify-between">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className="contact-short-btn ">
                <NavLink to="/">
              <button  className="no-underline text-[1rem] bg-custom-indigo
    text-white p-[0.7rem] px-[1.1rem] border-[0.1rem] border-custom-indigo  uppercase  
    text-center cursor-pointer">Get Started</button>
              </NavLink>
          </div>
        </div>
        </section>
            {/* footer section  */}  

      <footer className="pt-28 pb-12 px-0  bg-black">
        <div className=" flex flex-row gap-20 pb-16 justify-center">
          <div className="footer-about">
            <h3 className="text-white text-[1rem] mb-4">Thapa Technical</h3>
            <p className="text-white">Lorem ipsum dolor,sit<br/>amet consectetur adipisicing elit.</p>
          </div>
          

              {/* 2nd column */}
              <div className="footer-subscribe">
            <h3 className="text-white text-[1rem] mb-4">Subscribe to get important updates</h3>
            <form action="#">
              <input
              className="w-52 px-3 py-[0.4rem]  border-solid border-[0.1rem] uppercase text-[0.9rem] cursor-pointer"
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" className="mt-4 grid  bg-custom-indigo text-white py-[0.5rem] px-[1.4rem]  border-[0.1rem]  uppercase text-[1rem] cursor-pointer"/>
            </form>
          </div>
                  {/* 3rs column  */}
                  <div className="footer-social">
            <h3 className="text-white text-[1.1rem] mb-[1.1rem]">Follows Us</h3>
            <div className="footer-social--icons ">
              <ul className=" border-white flex space-x-4">
                <li className="rounded-full border-2"><FaDiscord className="icons text-white text-2xl relative cursor-pointer p-[0.3rem]" /></li>
            
                <li className="rounded-full border-2"><FaInstagram className="icons text-white text-2xl relative cursor-pointer p-[0.3rem]" /></li>
              
         <li className="rounded-full border-2">
                <a
                  href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                  target="_blank">
                  <FaYoutubeSquare className="icons text-white text-2xl relative cursor-pointer p-[0.3rem]"  />
                </a>
                </li>
              </ul>
            </div>
          </div>
             {/* 4th column  */}
          <div className="footer-contact">
            <h3 className="text-white text-[1.1rem] mb-[1.1rem]">Call Us</h3>
            <h3 className="text-white text-[1.1rem] mb-[1rem]">91 12345678978</h3>
          </div>
          </div>
              {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr className="mb-8 text-white"/>
          <div className="flex justify-evenly">
            <p className="text-white">
              @{new Date().getFullYear()} ThapaTechnical. All Rights Reserved
            </p>
            <div className="text-white">
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
            </div>
            </div>
       

      </footer>
   
    </>
  )
}

export default Footer
