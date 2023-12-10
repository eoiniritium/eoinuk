import './Header.scss'

import { Instagram } from './Icons';

function Header() {
    return (
        <header className='Header'>
            <div className='Header-inner'>
                <a href='./' className='name-btn'>
                    Eoin
                </a>

                <ul className='nav-buttons'>
                    <li><a href='./'>Home</a></li>
                    <li><a href='./about'>About</a></li>
                    <li><a href='./projects'>Projects</a></li>
                    <li><a href='./contact'>Contact</a></li>
                </ul>

                <ul className='social-buttons'>
                    <li>
                        <a href='https://www.instagram.com/eoiniritium/'>
                            <Instagram/>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;