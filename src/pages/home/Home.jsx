import { ReactComponent as HomeSvg } from "../../assets/home.svg";

import axios from "axios";
import React, { useState} from "react";
import RecipeCard from "../recipe/RecipeCard";
import Header from "../../components/header/Header";
import { MainContainer, ImgDiv } from "./HomeStyles";

const Home = () => {
  //Form valularını saklamak için kurduğun useStateler
 

  const [query, setQuery] = useState("");
  const [mealTypes, setMealTypes] = useState("breakfast");
  const [food, setFood] = useState();


 

  

  // for API
  const APP_ID = "99d163a8";
  const APP_KEY = "7aa0e15525db341f26b84be8b984886b";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealTypes}`;

  const getData = async () => {
    if (query) {
      const res = await axios.get(url);
      setFood(res.data.hits);
      // console.log(food);
    } else {
      alert("Food not Found with this query! Enter a new query please.");
    }
  };

  return (
    <div>
      <Header
        setQuery={setQuery}
        getData={getData}
        setMealTypes={setMealTypes}
      />
      {food ? 
            (<MainContainer >
            {food.map((data,i) => <RecipeCard data = {data} key = {i}/>)}
            </MainContainer>) 
              :
            (<ImgDiv>
              <HomeSvg/>
            </ImgDiv>)
      }

   
         
        
          
        
      
      
      
    </div>
  );
};

export default Home;
