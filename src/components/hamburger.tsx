'use client';

import { useState } from "react";

export default function Hamburger({className, children}: {className: string, children: React.ReactNode}) {
    const [openHamburger, setOpenHamburger] = useState(false);

    const cn = "group inline-flex text-center items-center justify-center " + className;

    return (
    <>
    <button onClick={() => {setOpenHamburger(!openHamburger); }} aria-pressed={openHamburger} className={cn}>
    <span className="sr-only">Menu</span>
    <svg className="w-6 h-6 fill-current pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <rect className="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-x-0 group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[315deg]" y="7" width="9" height="2" rx="1"></rect>
        <rect className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-pressed=true]]:rotate-45" y="7" width="16" height="2" rx="1"></rect>
        <rect className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[135deg]" y="7" width="9" height="2" rx="1"></rect>
    </svg>
    </button>

    {
        openHamburger &&
        <div>{children}</div>
    }
    </>
    );
}