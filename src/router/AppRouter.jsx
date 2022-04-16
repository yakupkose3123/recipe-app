import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import About from "../pages/about/About"
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Details from "../pages/details/Details";
import Footer from "../components/footer/Footer";
import PrivateRouter from "./PrivateRouter";


const AppRouter = () => {

  // const [passwordIsDone, setPasswordIsDone] = useState(true); 


  return (
    <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Login />} />

              <Route path="/home" element ={<PrivateRouter/>} >
                  <Route path="" element={<Home/>} /> 
              </Route>

              <Route path="/about" element ={<PrivateRouter/>} >
                  <Route path='' element={<About/>}/> 
              </Route>
                          
                         
              <Route path='/details' element={<Details/>}/>           
            </Routes>
            <Footer/>
        </BrowserRouter>

    </>
  )
}

export default AppRouter