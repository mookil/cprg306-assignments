/* 
MealIdeas component
Responsible for fetching and displaying meal ideas,
base on a selected shopping list item.
Utilizes the TheMealDB API.

It should receive a single prop: Ingredient.
*/
"use client"

import { useState, useEffect } from "react";

// string for the API endpoint
const APIendPoint = "https://www.themealdb.com/api/json/v1/1/filter.php?"


// This function takes an ingredient as a parameter,
// makes a fetch request to the TheMealDB API,
// and returns the meals that include that ingredient.
export async function fetchMealIdeas(ingredient) {
    const url = `${APIendPoint}i=${ingredient}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.meals; // Return the list of meals
}

export default function MealIdeas({ingredient}) {
    // "meals" holds a list of meal ideas fetched from an API.
    let [meals, setMeals] = useState([]);


    async function loadMealIdeas () {
        try {
            const result = await fetchMealIdeas(ingredient);
            setMeals(result);   

        } catch (err) {
            console.log("error fetching meal ideas: ", err);
        }
        
    }

    useEffect( () => {
        loadMealIdeas();
    }, [ingredient] ); // Re-run when ingredient changes

    return (
        <div className="">
            <h1 className="text-center">Meal Ideas For Ingredient:</h1>
            {meals.map( (meal, index) => (
                <div key={index} className="border p-2 m-2">
                    <p className="text-center">{meal.strMeal}</p>
                </div>
            ))}
            
        </div>
    )



}