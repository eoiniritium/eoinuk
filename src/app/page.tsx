import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-10 mt-10">
      <div className="w-full text-center">
        <h1>Eoin Mag Ualghairg</h1>
        <h2>Mathematics Student</h2>
        <h3>
          <Link target='_blank' href='https://www.bath.ac.uk/topics/about-the-university/' className="text-blue link">
            University of Bath
          </Link>
        </h3>
      </div>
    </div>
  );
}
