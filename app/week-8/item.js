
/**
 * This is an Item component to be displayed in item-list.
 * Reads in from items.json.
 * @param {*} props 
 * @returns 
 */
export default function Item(props) {

    let {id, name, quantity, category, onSelect} = props;

    return (
        <li className="border border-gray-300 rounded-md p-2 mb-2 ml-10 mr-10 hover:bg-amber-600"
        onClick={() => onSelect(name)}>
            {name} <br></br>
            Quantity: {quantity} <br></br>
            Category: {category}<br></br>
            ID: {id}
        </li>
    )
}