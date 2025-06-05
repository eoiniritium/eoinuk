import Link from "next/link";

export default function ComingSoon() {
    return (
        <div className="text-center mt-10">
            <h1>Coming Soon!</h1>
            <Link href='/' className="link">
                <h2 className="pt-2 text-blue">Home</h2>
            </Link>
        </div>
    );
}