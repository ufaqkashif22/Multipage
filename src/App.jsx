import About from "./About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Contact from "./Contact"
import Error from "./Error"
import Home from "./Home"
import Services from "./Services"
import { BrowserRouter,Routes,Route } from "react-router-dom"


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
