import styles from "./Navbar.module.css";
import { Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.leftNav}>
            <Link to="/home" className={styles.link}> JCBKSE RECIPE </Link>
        </div>
        
        <div className={styles.rightNav}>
            <Link to="/about" className={styles.link}>ABOUT</Link>
            <Link to="/github" className={styles.link}>GITHUB</Link>  
            <Link to="/" className={styles.link}>LOGOUT</Link> 
        </div>
         

    </div>
  )
}

export default Navbar