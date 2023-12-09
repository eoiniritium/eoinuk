import './Header.scss'

function Header() {
    return (
        <header className='Header'>
            <div className='Header-inner'>
                <a href='./' className='name-btn'>
                    Eoin Mag Ualghairg.
                </a>

                <ul className='nav-buttons'>
                    <li><a href='./'>Home</a></li>
                    <li><a href='./about'>About</a></li>
                    <li><a href='./projects'>Projects</a></li>
                    <li><a href='./contact'>Contact</a></li>
                </ul>
                </div>
        </header>
    );
}

export default Header;