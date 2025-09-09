
function Item({ name }, {quantity}, {category}) {
    return (
        <li>
            {name}, {quantity}, {category}
        </li>
    )
}

export default function ItemList() {
    return (
        <div>
            <ul className="list-disc list-inside">
                <Item name="Apples" quantity="2 lbs" category="Fruit" />
            </ul>
        </div>
    );
}