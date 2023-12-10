import './Home.scss';

function Home() {
    return (
        <div>
            <div className='name-and-portrait'>
                <div className="text">
                    <div className='name-big'>
                        <p>Eoin Proinsias Rhisiart</p>
                        <p>Mag Ualghairg</p>
                    </div>

                    <div className='blurb'>
                        <p>
                            I'm a 6th form student in my last year at <a href='https://www.glantaf.cymru/'>Ysgol Gyfun Gymraeg Glantaf</a>.
                            I study Mathematics, Further Mathematics, Physics, and Computer Science.
                        </p>
                            In my spare time I play 5-aside football, code, and socialise with my friends.
                        <p>
                        </p>
                    </div>
                </div>
                
                <img src={require('./src/portrait.jpeg')} className="portrait-image"/>
            </div>
        </div>
    );
}

export default Home;