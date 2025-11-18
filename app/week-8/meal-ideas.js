/* 
MealIdeas component
Responsible for fetching and displaying meal ideas,
base on a selected shopping list item.
Utilizes the TheMealDB API.

It should receive a single prop: Ingredient.
*/
"use client"

import { useState } from "react";

// This function takes an ingredient as a parameter,
// makes a fetch request to the TheMealDB API,
// and returns the meals that include that ingredient.
let fetchMealIdeas = (ingredient) => {
    
}

export default function MealIdeas(ingredient) {
    // "meals" holds a list of meal ideas fetched from an API.
    let [meals, setMeals] = useState();
}