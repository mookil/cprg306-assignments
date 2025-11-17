"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import Item from './item'

/**
 * This component is the menu for adding a new item to the 
 * item-list.
 * @param {*} props - meant to be used for the handleAddItem event handler in page.js
 * @returns 
 */
export default function NewItem(props) {

    // Variables
    // ====================================
    const [itemid, setItemId] = useState(""); // id of an item
    const [quantity, setQuantity] = useState(1); // Current quantity of item
    const [name, setName] = useState(""); // Name of the current item
    const [category, setCategory] = useState("produce"); // Category of the current item

    let { onAddItem } = props;

    // Class name shared by all buttons
    const buttonClassName = "border border-gray-300 p-2 pl-10 pr-10 m-3 mt-0 hover:bg-gray-500 rounded-md active:bg-gray-300 rounded-md";

    // Functions
    // =====================================

    // Increment function for increasing the quantity by 1
    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    // Decrement function for decreasing the current quantity by 1
    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    const changeId = (event) => {
        setItemId(event.target.value);
    }

    // Change the name of the current item
    const changeName = (event) => {
        setName(event.target.value);
    }

    // Change the category of the current item
    const changeCategory = (event) => {
        setCategory(event.target.value);
    }

    const resetForm = () => {
        setItemId("");
        setQuantity(1);
        setName("");
        setCategory("produce");
    }

    /**
     * Creates an item with the current values of name, quantity, and category.
     * Logs the item object to the console.
     * Displays an alert with the current state of name, quantity, and category.
     * Afterwards, reset the state variables to their initial values.
     */
    const handleSubmit = (event) => {
        // preventDefault() stops the default submission request
        event.preventDefault();
        let newItem = {
            id: itemid,
            name: name,
            quantity: quantity,
            category: category
        }
        console.log(`Item ${newItem.name} is being registered.`);
        onAddItem(newItem); // call the onAddItem function
        alert(`Item [${newItem.name}] Category: [${newItem.category}] Quantity: [${newItem.quantity}] is being registered.`);
        resetForm();
    }

    return (
        <div className="flex justify-center flex-col">
            <form className="p-2 m-4 bg-slate-900 text-white max-w-sm w-full"
            onSubmit={handleSubmit}>
                {/* This section is the Id section. */}
                <div>
                    <input required type="text" placeholder="ID" 
                onChange={changeId} value={itemid} 
                className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg text-white font-sans"></input>
                </div>

                {/* This section is the Item Name section. */}
                <div>
                    <input required type="text" placeholder="Item Name" 
                onChange={changeName} value={name} 
                className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg text-white font-sans"></input>
                </div>

                {/* This section is the Category Selection section. */}
                <div className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg text-white font-sans">
                    <select className="w-full" onChange={changeCategory}>
                        <option value="produce" className="text-black">Produce</option>
                        <option value="dairy" className="text-black">Dairy</option>
                        <option value="bakery" className="text-black">Bakery</option>
                        <option value="frozenFoods" className="text-black">Frozen Foods</option>
                        <option value="cannedGoods" className="text-black">Canned Goods</option>
                        <option value="dryGoods" className="text-black">Dry Goods</option>
                        <option value="beverages" className="text-black">Beverages</option>
                        <option value="snacks" className="text-black">Snacks</option>
                        <option value="household" className="text-black">Household</option>
                        <option value="other" className="text-black">Other</option>
                    </select>
                </div>
                
           
                {/* This section is the Quantity Decrement/Increment section. */}
                <div> 
                    <p className="text-white" value={quantity}> Quantity: {quantity} </p>
                    <button type="button" onClick={decrement} className={buttonClassName}>-</button>
                    <button type="button" onClick={increment} className={buttonClassName}>+</button>
                </div>

                {/* Submit Button */}
                <div>
                    <button type="submit"
                    className={buttonClassName}>Submit</button>
                </div>
             </form>
        </div>
    )

}