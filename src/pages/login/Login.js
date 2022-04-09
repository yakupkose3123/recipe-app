import Form from "../../components/header/Form";
import Header from "../../components/header/Header";
import {ReactComponent as MealIcon} from "../../assets/meal.svg";
import Styles from "./Login.module.css";



const Login = () => {
  return (
    <div className={Styles.container}>      
      <div className={Styles.formGroup}>
        <MealIcon />
        <div className={Styles.head}>
          <Header />
        </div>
        <Form />
      </div>
      
      
      
          
         

    </div>
  );
};

export default Login;
