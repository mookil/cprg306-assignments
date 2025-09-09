import Link from "next/link";


export default function StudentInfo() {
    return (
        <div>
            <p>Name: Mikael Ly</p>
            <p>GitHub: <Link href="https://github.com/mookil" className="text-cyan-600 underline hover:text-cyan-300">github.com/mookil</Link></p>
            
        </div>
    );
}