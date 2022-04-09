import { ReactComponent as HomeSvg } from "../../assets/home.svg";
import Styles from "../home/Home.module.css";
import axios from "axios";
import React, {useState} from "react";
import RecipeCard from "../recipe/RecipeCard";


const Home = () => {
  //Form valularını saklamak için kurduğun useStateler
  const [query, setQuery] = useState();
  const [meal, setMeal] = useState("breakfast");
  const [data, setData] = useState([]);

  const inputChange = (e) => { setQuery(e.target.value)}
  const selectChange = (e) => {setMeal(e.target.value)}

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();    
  }

  
   
  // for API
  const APP_ID = "42c80eaf";
  const APP_KEY = "9e51e8449033b1c2ea78b947af7bcdb1";    

  const getData = async ()=>{        
    const res = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`)
        setData(res.data.hits);
        // console.log(res.data.hits);
    };



  return (
    <div className={Styles.container}>
      <h1> Food App</h1>
      <form  onSubmit={handleSubmit} className={Styles.form} >
        <input
          type="text"
          name="SearchBar"
          id="SearchBar"
          placeholder="Search"
          onChange = {inputChange}
          

        />
        <button type="submit">
            SEARCH
        </button>
        <select name="meals" id="meals" className={Styles.selects} onChange = {selectChange} >
            <option value="breakfast" >Breakfast</option>
            <option value="lunch" >Lunch</option>
            <option value="dinner" >Dinner</option>
            <option value="snack" >Snack</option>
            <option value="teatime" >Teatime</option>
        </select>

      </form>
      <div className={Styles.cards}>
        {data.map((data,i) => <RecipeCard data = {data} key = {i}/>)}
      </div>
      
      <HomeSvg />
        
      
      
    </div>
  );
};

export default Home;
