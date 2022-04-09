import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import About from "../pages/about/About"
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Details from "../pages/details/Details";
import {useState} from "react"
import Footer from "../components/footer/Footer";


const AppRouter = () => {

  const [passwordIsDone, setPasswordIsDone] = useState(true)
  


  return (
    <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Login />} />
              {passwordIsDone && <Route path="/home" element={<Home/>} />}             
              <Route path='/about' element={<About/>}/>           
              <Route path='/details' element={<Details/>}/>           
            </Routes>
            <Footer/>
        </BrowserRouter>

    </>
  )
}

export default AppRouter