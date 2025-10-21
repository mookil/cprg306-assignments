"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"
import { useState } from "react";


export default function Page() {

    let items = itemsData;

    const handleAddItem = (event) => {

    }

    return (
        <main className="bg-blue-950">
            <h1 className="flex justify-center text-3xl mb-4">Shopping List</h1>
            <ItemList />
        </main>
    );
}