import './Home.scss';

function Home() {
    return (
        <div>
            <div className='name-and-portrait'>
                <div className="text">
                    <div className='name-big'>
                        <p>Eoin</p>
                        <p>Mag Ualghairg</p>
                    </div>

                    <div className='blurb'>
                        <p>
                            I'm a 6th form A-Level student studying Mathematics
                            Further Mathematics, Physics, and Computer Science.
                        </p>
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