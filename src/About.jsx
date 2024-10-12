import Hero from "./components/Hero"


const About = () => {
    const data= {
        name:"Ufaq",
        images:"./images/about1.svg" 
    }
  return (
    <>
        <Hero {...data} />
    </>
  )
}

export default About
