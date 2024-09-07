import Hero from "./components/Hero"


const Home = () => {
    const data= {
        name:"thapa technial",
        images:"./images/hero.svg" 
    }
  return (
    <>
    <Hero {...data} />
      <h1 className=""></h1>
    </>
  )
}

export default Home
