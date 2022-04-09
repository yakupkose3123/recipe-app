import styles from "./Navbar.module.css";
import { Link} from "react-router-dom";
import Header from "../header/Header";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.leftNav}>
            <Link to="/home" className={styles.link}> <Header/> </Link>
        </div>
        
        <div className={styles.rightNav}>
            <Link to="/about" className={styles.link}>ABOUT</Link>
            <a href="https://github.com/yakupkose3123" className={styles.link} target="blank" >GITHUB</a>  
            <Link to="/" className={styles.link}>LOGOUT</Link> 
        </div>
         

    </div>
  )
}

export default Navbar