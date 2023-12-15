import './Footer.scss';

function Footer() {
    const language = window.location.pathname.split('/')[1];

    switch(language) {
        case 'en':
            return (
                <footer className='footer'>
                    <div className='left-side'>
                        eoin.uk
                    </div>
                    <div className='right-side'>
                        Footer
                    </div>
                </footer>
            );
        break;

        case 'cy' :
            return (
                <footer className='footer'>
                    <div className='left-side'>
                        eoin.uk
                    </div>
                    <div className='right-side'>
                        Troed
                    </div>
                </footer>
            );
        break;
    }
}

export default Footer;