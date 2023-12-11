import './Home.scss';

function Home() {
    return (
        <div>
            <div className="first-item">
                <div className='text'>
                    <div className='name-big'>
                        <p className='first-name'>Eoin Proinsias Rhisiart</p>
                        <p className='last-name'>Mag Ualghairg</p>
                    </div>

                    <div className='blurb'>
                        <p>
                            I'm a 6th form student in my last year at <a href='https://www.glantaf.cymru/'>Ysgol Gyfun Gymraeg Glantaf</a>.
                            I study Mathematics, Further Mathematics, Physics, and Computer Science.
                        </p>
                    </div>
                </div>

                <img src={require('./src/portrait.jpeg')} className="portrait-image"/>
            </div>

            <div className='links'>
                <a href='/about'>
                    <div>
                    Read About Me
                    </div>
                </a>
                <a href='/projects'>
                    <div>
                    See my projects
                    </div>
                </a>
                <a href='/contact'>
                    <div>
                    Get in touch
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Home;