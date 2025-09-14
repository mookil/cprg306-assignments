import ItemList from "./item-list";

export default function Page() {
    return (
        <main>
            <h1 className="flex justify-center text-3xl mb-4">Shopping List</h1>
            <ItemList />
        </main>
    );
}