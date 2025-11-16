"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"
import { useState } from "react";

/**
 * Main Page function for Week 7 assignment
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
            <h1 className="flex justify-center text-3xl mb-4">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList itemsArray={items}/>
        </main>
    );
}