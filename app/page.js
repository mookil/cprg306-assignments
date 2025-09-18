import Link from "next/link";


export default function Page() {
  let linkClassName = "text-cyan-600 underline hover:text-cyan-300";
  return (
    <main>
      <h1 className="text-3xl">CPRG 306: Web Development 2 - Assignments</h1>
      <hr></hr>

      <p>Assignments</p>
      <ul className="list-disc list-inside">
        <li>
          <Link href="./week-2" className={linkClassName}>Week 2</Link>
        </li>

        <li>
          <Link href="./week-3" className={linkClassName}>Week 3</Link>
        </li>

        <li>
          <Link href="./week-4" className={linkClassName}>Week 4</Link>
        </li>

        <li>
          <Link href="./week-5" className={linkClassName}>Week 5</Link>
        </li>

      </ul>

      
    </main>
  );
}