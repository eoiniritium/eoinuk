import Link from "next/link";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";
import Hamburger from "./hamburger";

export default function Header() {
    return(
    <div className="relative bg-blue grain text-white px-10 py-2 w-full flex items-center justify-between">
        <h4 className="max-sm:hidden"><Link href="/">Eoin</Link></h4>
        <div className="collapse max-sm:visible">
            <Hamburger className='rounded text-blue py-1 px-4 bg-white'>
                <div className="py-2">
                    <h3><Link href="/" className="link">Home</Link></h3>
                    <h3><Link href="/projects" className="link">Projects</Link></h3>
                    <h3><Link href="/tutoring" className="link">Tutoring</Link></h3>
                </div>
            </Hamburger>
        </div>
        
        <div className="max-sm:hidden flex justify-around w-full max-w-96">
            <Link href="/" className="link">Home</Link>
            <Link href="/projects" className="link">Projects</Link>
            <Link href="/tutoring" className="link">Tutoring</Link>
        </div>
            
        <div className="flex justify-between h-full pt-[0.4rem]">
            <h4 className="pr-1"><a target="_blank"  href="https://github.com/eoiniritium/"><FaGithub/></a></h4>
            <h4 className="px-1"><a target="_blank"  href="https://www.linkedin.com/in/eoin-mag-ualghairg-12485722b/"><FaLinkedin/></a></h4>
            <h4 className="pl-1"><a target="_blank"  href="https://www.instagram.com/eoiniritium/"><FaInstagram/></a></h4>
        </div>
    </div>
    );
}