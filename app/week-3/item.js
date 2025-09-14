
export default function Item({ name, quantity, category}) {
    return (
        <li className="border border-gray-300 rounded-md p-2 mb-2 ml-10 mr-10">
            {name} <br></br>
            Quantity: {quantity} <br></br>
            Category: {category}
        </li>
    )
}