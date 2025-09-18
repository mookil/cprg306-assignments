"use client"

import React, {useState} from 'react'
import Link from 'next/link'



export default function NewItem() {

    const [quantity, setQuantity] = useState(1);

    let buttonClassName = "border border-gray-300 p-2 pl-10 pr-10 m-3 mt-0 hover:bg-gray-500 rounded-md active:bg-gray-300 rounded-md";

    let increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    let decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="flex justify-center">
            <p className=""> Quantity: {quantity} </p>
            <button onClick={decrement} className={buttonClassName}>-</button>
            <button onClick={increment} className={buttonClassName}>+</button>
        </div>
    )

}