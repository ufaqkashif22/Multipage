

const Contact = () => {
  return (
    <>
       <section className="section-bar py-14 px-0 ">
      <h1 className="common-heading mb-12 capitalize text-[2rem] font-bold text-center">
            Our contact</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.640838405192!2d67.10342817515485!3d24.944302477874665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338af61e87e99%3A0x8684d4194e38df45!2sAsma%20Garden!5e0!3m2!1sen!2s!4v1725196651861!5m2!1sen!2s"
             width="100%"
              height="450"
               style={{border:0 }}
               allowFullScreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade">
               </iframe>

           <div className="container max-w-[100rem] text-center">
            <div className="contact-form mt-20">
            <form
            action="https://formspree.io/f/mnnarqaa"
            method="POST"
            className="contact-inputs flex flex-col items-center gap-9">
            <input
              className="w-[30rem] py-4 px-4 uppercase border border-zinc-900 shadow-custom"
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
            className="w-[30rem]  py-4 px-4 uppercase border border-zinc-900"
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
            className="w-[30rem]  py-4 px-14 uppercase border border-zinc-900"
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>

            <input  type="submit" value="send" className="max-w-[10rem] mt-4 bg-custom-indigo text-white py-[0.7rem] px-[3.1rem]  border-[0.1rem] border-solid uppercase text-[1.2rem] cursor-pointer mr-[21rem] transition-all
            hover:bg-white hover:border-custom-indigo hover:text-custom-indigo hover:scale-90"/>
          </form>
            </div>
           </div>    
    </section>
    </>
  )
}

export default Contact
