import Link from "next/link";


export default function StudentInfo() {
    return (
        <div>
            <p>Mikael Ly</p>
            <Link href="https://github.com/mookil" className="text-cyan-600 underline hover:text-cyan-300">My Github Account</Link>
        </div>
    );
}