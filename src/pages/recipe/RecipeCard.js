import Styles from "./Recipe.module.css"

const RecipeCard = ({data}) => {
  console.log(data.recipe);

  return (
    <div className={Styles.recipeCards}>
        <h3>{data.recipe.label}</h3>
        <img src={data.recipe.image} alt="recipeImage"/>
        <button >Show More</button>        
    </div>
  )
}

export default RecipeCard