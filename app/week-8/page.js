"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"
import { useState } from "react";

/**
 * Main Page function for Week 8 assignment
 * Current Progress:
 * - Imported week 7 components

Builds upon the week 7 assignment done last time,
purpose of week 8 is to extend the functionality by
integrating a third-party API to suggest meal ideas.
 * @returns 
 */
export default function Page() {

    // An array of items read in from items.json
    let  [items, setItems] = useState(
        itemsData.map( (item) => ({...item}) ) // For each item in itemsData, map it into the items array.
    );

    // Add new item to the end of the array using the spread operator
    // (basically, replace items with a new array that contains items + newItem appended at the end)
    const handleAddItem = (newItem) => {
        setItems([...itemsData, newItem]);
    }

    return (
        <main className="bg-blue-950">
            {/* Header Section */}
            <div>
                <p>This is Week 8!!</p>
                <h1 className="flex justify-center text-3xl mb-4">Shopping List</h1>
            </div>
            

            {/* List + Add new Item */}
            <div>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList itemsArray={items}/>
            </div>
            

            {/* Oguri Cap */}
            <div className="flex justify-center">
                <img src="./ogurifat.jpg" alt="oguri fat.jpg" className="w-50 h-50 m-10 rounded-full"></img>
            </div>

        </main>
    );
}