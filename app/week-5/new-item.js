"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import Item from './item'


export default function NewItem() {

    // Variables
    // ====================================
    const [quantity, setQuantity] = useState(1); // Current quantity of item
    const [name, setName] = useState(""); // Name of the current item
    const [category, setCategory] = useState("produce"); // Category of the current item

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

    // Change the name of the current item
    const changeName = (event) => {
        setName(event.target.value);
    }

    // Change the category of the current item
    const changeCategory = (event) => {
        setCategory(event.target.value);
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
        // let newItem = {
        //     name: name,
        //     quantity: quantity,
        //     category: category
        // }
        // console.log(`Item ${newItem.name} is being registered.`);
        // alert(`Item ${newItem.name} is being registered.`);
    }

    return (
        <div className="flex justify-center flex-col m-40 mt-0">
            <form className="p-2 m-4 bg-slate-900 text-white max-w-sm w-full"
            onSubmit={handleSubmit}>
                <input type="text" placeholder="Item Name" 
                onChange={changeName} 
                className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg text-white font-sans"></input>
           
                {/* This section is the Quantity Decrement/Increment section. */}
                <div> 
                    <p className="text-white"> Quantity: {quantity} </p>
                    <button type="button" onClick={decrement} className={buttonClassName}>-</button>
                    <button type="button" onClick={increment} className={buttonClassName}>+</button>
                </div>

                {/* Submit Button */}
                <div>
                    <button type="submit"
                    className={buttonClassName}>Submit</button>
                </div>
             </form>

             <div>
                    <p>debug section</p>
                    <p>Item Name: {name}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Category: {category}</p>

                </div>
        </div>
    )

}