
/**
 * This is an Item component to be displayed in item-list.
 * Reads in from items.json.
 * @param {*} props 
 * @returns 
 */
export default function Item(props) {

    let {id, name, quantity, category, onSelect} = props;

    const trimmedName = (text) => {
        const emojiRegex = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
        let trim = text.replace(emojiRegex, '').replace(/,.*/g, '').replace(/\d+/g, '').trim().toLowerCase();
        if (trim.endsWith('s')) {
            trim = trim.slice(0, -1);
        }

        console.log(trim)
        return trim;
    }

    return (
        <li className="border border-gray-300 rounded-md p-2 mb-2 ml-10 mr-10 hover:bg-amber-600"
        onClick={() => onSelect(`${trimmedName(name)}`)}>
            {name} <br></br>
            Quantity: {quantity} <br></br>
            Category: {category}<br></br>
            ID: {id}
        </li>
    )
}