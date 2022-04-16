import {HeaderContainer, MainHeader} from "./HeaderStyles";
import HomeForm from "./HomeForm";

const Header = ({setQuery, getData, setMealTypes}) => {
  return (
    <HeaderContainer>
      <MainHeader>Food App</MainHeader>
      <HomeForm 
      setQuery={setQuery}
      getData={getData}
      setMealTypes={setMealTypes}
      />
    </HeaderContainer>
  )
}

export default Header