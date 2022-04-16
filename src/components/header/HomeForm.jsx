import React from 'react'
import { Button, FoodInput, FormContainer, Select } from './HeaderStyles'

const HomeForm = ({setQuery, getData, setMealTypes}) => {

    const formSubmit = (e) => {
        e.preventDefault();
        getData();
      };

  return (
    <FormContainer onSubmit={formSubmit}>
        <FoodInput 
            type="text" 
            placeholder='Search' 
            onChange={(e)=>{setQuery(e.target.value)}}
        />
        <Button type="submit" >Search</Button>
        <Select name = "mealTypes" 
            id="mealTypes" 
            onChange={(e)=>{setMealTypes(e.target.value)}}
        >
            <option value="breakfast" >Breakfast</option>
            <option value="lunch" >Lunch</option>
            <option value="dinner" >Dinner</option>
            <option value="snack" >Snack</option>
            <option value="teatime" >Teatime</option>
        </Select>
    </FormContainer>
  )
}

export default HomeForm