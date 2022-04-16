import {  useNavigate } from "react-router-dom"
import Styles from "./Recipe.module.css"

const RecipeCard = ({data}) => {
  // console.log(data.recipe);
  const navigate = useNavigate();

  const moreClick = () => {    
    navigate("/details", {state:{data}});
  }

  return (
    <div className={Styles.recipeCards}>
        <h3>{data.recipe.label}</h3>
        <img src={data.recipe.image} alt="recipeImage"/>
        <button className={Styles.showButton} onClick={moreClick}>Show More</button>        
    </div>
  )
}

export default RecipeCard