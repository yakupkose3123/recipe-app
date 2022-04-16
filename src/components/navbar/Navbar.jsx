import HeaderLogo from "../header/HeaderLogo";
import {useState} from "react"
import {  Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
// import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [github, setGithub] = useState("");

  const handleClickHamburger = () => {
    setIsOpen(!isOpen);
    // alert("hamburger clicked")
    
  }
  return (
    <Nav>
      
        <Logo to="/home" >
            <HeaderLogo/>
        </Logo>

        <Hamburger onClick={handleClickHamburger} >
          <span/>
          <span/>
          <span/>
          {/* <GiHamburgerMenu/> */} {/* react icons dan menü getirmek istersek */}
        </Hamburger>

        <Menu isOpen={isOpen}>
          <MenuLink to="/about" onClick={handleClickHamburger}>About</MenuLink>

          <MenuLink onClick={()=>setGithub(
            (window.location.href = "https://github.com/yakupkose3123" )
          )} 
          to={github}  
          target="blank" 
          >
            GıtHub
          </MenuLink>

          <MenuLink to="/" onClick={handleClickHamburger} onMouseUp = {()=>sessionStorage.clear()}>Logout</MenuLink>

        </Menu>
       
        
    </Nav>
  )
}

export default Navbar