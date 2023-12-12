import './Header.scss'

import { Instagram, Linkedin, Github } from './Icons';

function splitRoute(route) {
    let split = route.split('/');

    split.shift();
    
    return split;
}

function Header() {

    const location = window.location.pathname;

    const tokenised = splitRoute(location);
    const language = tokenised[0];
    tokenised.shift(); // remove first item
    let residual = '/' + tokenised.join('/');
    if (residual == '/') {
        residual = '';
    }

    let path;

    switch (language) {
        case 'en': 
            path = '/../cy' + residual;

            return (
            <header className='Header'>
                <a href='/en' className='name-btn'>
                    Eoin
                </a>

                <a href={path} className='language-toggle'>
                    <img src={require('./src/wales_flag.png')}/>
                </a>
    
                <ul className='nav-buttons'>
                    <li><a href='/en'>Home</a></li>
                    <li><a href='/en/about'>About</a></li>
                    <li><a href='/en/projects'>Projects</a></li>
                    <li><a href='/en/contact'>Contact</a></li>
                </ul>
    
                <ul className='social-buttons'>
                    <li>
                        <a href='https://www.linkedin.com/in/eoin-mag-ualghairg-12485722b/'>
                            <Linkedin/>
                        </a>
                    </li>
                    
                    <li>
                        <a href='https://github.com/eoiniritium'>
                            <Github/>
                        </a>
                    </li>
                    
                    <li>
                        <a href='https://www.instagram.com/eoiniritium/'>
                            <Instagram/>
                        </a>
                    </li>
                </ul>
            </header>
        );
        break;

        case 'cy':
            path = '/../en' + residual;

            return (
            
            <header className='Header'>
                <a href='/cy' className='name-btn'>
                    Eoin
                </a>

                <a href={path} className='language-toggle'>
                    <img src={require('./src/uk_flag.png')}/>
                </a>
    
                <ul className='nav-buttons'>
                    <li><a href='/cy'>Cartref</a></li>
                    <li><a href='/cy/about'>Amdanaf i</a></li>
                    <li><a href='/cy/projects'>Prosiectau</a></li>
                    <li><a href='/cy/contact'>Cysylltu</a></li>
                </ul>
    
                <ul className='social-buttons'>
                <li>
                        <a href='https://www.linkedin.com/in/eoin-mag-ualghairg-12485722b/'>
                            <Linkedin/>
                        </a>
                    </li>
                    
                    <li>
                        <a href='https://github.com/eoiniritium'>
                            <Github/>
                        </a>
                    </li>
                    
                    <li>
                        <a href='https://www.instagram.com/eoiniritium/'>
                            <Instagram/>
                        </a>
                    </li>
                </ul>
            </header>
        );
        break;
    }
}

export default Header;