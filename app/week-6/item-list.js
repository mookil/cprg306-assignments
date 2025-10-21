"use client"

import items from './items.json';

import { useState } from 'react';
import Item from './item';

export default function ItemList() {
    const {sortBy, setSortby} = useState("name");

    const listItems = items;

    return(
        <div>
            {/* Sorting Methods */}
            <div className='pl-10 pb-4'>
                <label>Sort by: </label>
                <select>
                    <option value="name">Name</option>
                    <option value="category">Category</option>
                </select>
            </div>
            
            {/* List of Items */}
            <ul>
                {listItems.map((item, index) => (
                    <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
                </ul>
        </div>
    );
}
