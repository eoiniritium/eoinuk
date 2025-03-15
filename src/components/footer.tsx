import Link from "next/link";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";

export default function Footer() {
    return(
    <div className="table-row h-min">
        <div className="bg-green grain text-white px-10 py-2 w-full flex items-center justify-between">
            <h4><Link href="/" className="font-size">Eoin</Link></h4>
                
            <div className="flex justify-between">
                <h4 className="pr-1"><a target="_blank"  href="https://github.com/eoiniritium/"><FaGithub/></a></h4>
                <h4 className="px-1"><a target="_blank"  href="https://www.linkedin.com/in/eoin-mag-ualghairg-12485722b/"><FaLinkedin/></a></h4>
                <h4 className="pl-1"><a target="_blank"  href="https://www.instagram.com/eoiniritium/"><FaInstagram/></a></h4>
            </div>
        </div>
    </div>
    );
}