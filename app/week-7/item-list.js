"use client"

import items from './items.json';

import { useState } from 'react';
import Item from './item';

/**
 * This component is for displaying all the items in items.json
 * by reading them in as an item.js.
 * @returns 
 */
export default function ItemList({itemsArray}) {
    // Sort By useState
    let [sortBy, setSortBy] = useState("name");

    // Method to handle onChange for sortBy
    const handleSortChange = (event) => {
        setSortBy(event.target.value)
    }

    // Sorting Filter method
    if (sortBy === "name") {
        itemsArray.sort( (a, b) => {
            if ( isNaN(parseInt( a[sortBy]))) {
                // Alphabetical Name Sorting
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            }
        })
    } else if (sortBy === "category") {
        // Sort by Category
        itemsArray.sort( (a, b) => {
            if ( isNaN(parseInt( a[sortBy]))) {
                // Alphabetical Category Sorting
                let categoryA = a.category.toUpperCase();
                let categoryB = b.category.toUpperCase();
                if (categoryA < categoryB) return -1;
                if (categoryA > categoryB) return 1;
                return 0;
            }
        })
    }

    // Button Style
    const buttonStyle = (sortBy === "name") ? "pl-10 p-2 mb-4 bg-red-500" : "pl-10 p-2 mb-4 bg-orange-500";

    return(
        <div>
            {/* Sorting Methods */}
            <div className={buttonStyle}>
                <label>Sort by: </label>
                <select onChange={handleSortChange}>
                    <option value="name">Name</option>
                    <option value="category">Category</option>
                </select>
            </div>
            
            {/* List of Items */}
            <ul>
                {itemsArray.map((item) => (
                    <Item key={item.id} id={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
                </ul>
        </div>
    );
}
