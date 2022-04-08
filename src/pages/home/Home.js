import { ReactComponent as HomeSvg } from "../../assets/home.svg";
import Styles from "../home/Home.module.css";
import axios from "axios";
import React, {useEffect} from "react";


const Home = () => {
    const query = "egg";
    const APP_ID = "42c80eaf";
    const APP_KEY = "9e51e8449033b1c2ea78b947af7bcdb1";
    const meal = "breakfast";

const getData = async ()=>{
        
    const res = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`);
        console.log(res.data.hits);
    };




useEffect(() => {    
    getData();  
    
}, [])



  return (
    <div className={Styles.container}>
      <h1> Food App</h1>
      <form>
        <input
          type="text"
          name="SearchBar"
          id="SearchBar"
          placeholder="Search"
        />
        <button type="submit">
            SEARCH
        </button>
        <select name="meals" id="meals" className={Styles.selects}>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch" >Lunch</option>
            <option value="Dinner" >Dinner</option>
            <option value="Snack" >Snack</option>
            <option value="Teatime" >Teatime</option>
        </select>

      </form>
      <HomeSvg />
    </div>
  );
};

export default Home;
