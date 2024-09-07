import Hero from "./components/Hero"


const About = () => {
    const data= {
        name:"vinod",
        images:"./images/about1.svg" 
    }
  return (
    <>
        <Hero {...data} />
    </>
  )
}

export default About
