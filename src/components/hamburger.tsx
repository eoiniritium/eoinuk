'use client';

import { useState } from "react";

interface HamburgerProps {
    hamburgerButtonJSX: React.ReactNode;
    children: React.ReactNode;
}

export default function Hamburger({hamburgerButtonJSX, children}: HamburgerProps) {
    const [openHamburger, setOpenHamburger] = useState(false);

    return (
    <>
    <button onClick={() => {setOpenHamburger(!openHamburger); }}>
        {hamburgerButtonJSX}
    </button>

    {
        openHamburger &&
        <div>{children}</div>
    }
    </>
    );
}