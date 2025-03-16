import Link from "next/link";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import Hamburger from "@/components/hamburger";

export default function Header() {
    return(
    <div className="relative bg-blue grain text-white px-3 sm:px-10 py-2 w-full flex items-center justify-between">
        <div className="flex items-center">
            <h4><Link href="/" className="block max-sm:hidden">Eoin</Link></h4>
            <div className="hidden max-sm:block">
                <Hamburger hamburgerButtonJSX={
                    <div className='px-3 py-3 flex items-center'>
                        <h4>Eoin</h4>
                        <FaCaretDown className="ml-2"/>
                    </div>
                }>
                    <div className="z-1 py-2 group absolute bg-blue flex flex-col gap-2 grain rounded-b">
                        <Link href="/"         className="link"><h3 className="pl-3 pr-10">Home</h3></Link>
                        <Link href="/projects" className="link"><h3 className="pl-3 pr-10">Projects</h3></Link>
                        <Link href="/tutoring" className="link"><h3 className="pl-3 pr-10">Tutoring</h3></Link>
                    </div>
                </Hamburger>
            </div>
        </div>
        
        <div className="max-sm:hidden flex justify-around w-full max-w-96">
            <Link href="/" className="link">Home</Link>
            <Link href="/projects" className="link">Projects</Link>
            <Link href="/tutoring" className="link">Tutoring</Link>
        </div>
            
        <div className="flex justify-between">
            <h4 className="pr-1"><a target="_blank"  href="https://github.com/eoiniritium/"><FaGithub/></a></h4>
            <h4 className="px-1"><a target="_blank"  href="https://www.linkedin.com/in/eoin-mag-ualghairg-12485722b/"><FaLinkedin/></a></h4>
            <h4 className="pl-1"><a target="_blank"  href="https://www.instagram.com/eoiniritium/"><FaInstagram/></a></h4>
        </div>
    </div>
    );
}