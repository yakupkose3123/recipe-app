import HeaderLogo from "../../components/header/HeaderLogo";
import { ReactComponent as MealIcon } from "../../assets/meal.svg";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";
import meal from "../../assets/meal.svg";


const Login = () => {
  const user = {
    username : "user"
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(user))
    window.location.href = "/home";
    
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal}></StyledImg>
        <Header>
          <HeaderLogo />
        </Header>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="Username" required />
          <StyledInput type="password" placeholder="Password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
