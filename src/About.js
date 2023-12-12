import './About.scss';

const dateEN = [
    {
        id: 0,
        date: 'Jan 2006',
        title: 'Hello World',
        body: 'I am born into this world'
    },

    {
        id: 1,
        date:  'Sept 2009',
        title: 'Nursery',
        body: 
        <>
            I started <a href='https://www.ysgolmynyddbychan.cymru/en/'>nursery</a> in 2009, from what I'm told I didn't really want to go in the start.
            My first memories of mathematics and using computers come from here, I don't remember much though.
        </>
    }
];

const dateCY = [
    {
        id: 0,
        date: 'Ion 2006',
        title: 'Hello fyd',
        body: 'Fe ges i fy ngenu'
    },

    {
        id: 1,
        date:  'Medi 2009',
        title: 'Ysgol Feithrin',
        body: 
        <>
            Dechreuais i fynd i'r <a href='https://www.ysgolmynyddbychan.cymru/cy/'>ysgol feithrin</a> yn 2009, yn ôl bob sôn doeddwn i ddim eisiau mynd yn y dechrau.
            Mae fy atgofion cyntaf o fathemateg a defnyddio cyfrifiaduron yn dod o'r amser hon yn fy mywyd.
        </>
    }
];

function populateCalendarEN() {
    const events = dateEN.map(date => <>
        <div className='event'>
            <p className='date'>{date.date}</p>
            <div className='text'>
                <h2>{date.title}</h2>
                <p className='body'>{date.body}</p>
            </div>
        </div>
    </>);

    return <>{events}</>;
}

function populateCalendarCY() {
    const events = dateCY.map(date => <>
        <div className='event'>
            <p className='date'>{date.date}</p>
            <div className='text'>
                <h2>{date.title}</h2>
                <p className='body'>{date.body}</p>
            </div>
        </div>
    </>);

    return <>{events}</>;
}

const About = (param) => {
    const lang = param.language;

    
    switch (lang) {
        case 'en':
            return (
                <div className='about-parent'>
                    <div className='timeline'>
                        <h1>Timeline</h1>
                        {populateCalendarEN()}
                    </div>
                    <div className='otherPane'>
                        <h1>Lorem ipsum</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus ante sed magna tempor ultricies. Sed vel dignissim diam. Vivamus imperdiet lectus et sem gravida, id ultrices ante interdum. Morbi feugiat massa sed accumsan gravida. Fusce nec eros ligula. Donec nec sem placerat, feugiat ante vel, vestibulum elit. Mauris non enim ante. Nunc sed dictum risus. Sed sollicitudin orci eu lacus pretium, id commodo felis sagittis.
                        </p>
                        <p>
                        Quisque sit amet felis rutrum, ultrices nisi sed, dictum eros. Nullam dictum quam eu nulla tincidunt lobortis. Mauris eget gravida neque. Mauris volutpat libero sed lacinia semper. Suspendisse auctor ligula at magna convallis, placerat faucibus lacus ullamcorper. Aenean varius sollicitudin diam, ut eleifend justo consectetur quis. Curabitur mi velit, pretium id sem in, ullamcorper maximus nisl. Aenean posuere sollicitudin eros, a interdum sem accumsan vitae. Etiam molestie lectus quis ex pharetra, non laoreet turpis congue. Nam finibus tortor justo, sit amet feugiat metus varius dignissim.
                        </p>
                        <p>
                        Nunc aliquam et nisi vitae cursus. Donec ultricies justo in purus maximus efficitur. Vivamus nec blandit mi. Morbi felis magna, porta sit amet lectus non, aliquam porttitor quam. Donec imperdiet nec elit facilisis varius. Suspendisse potenti. Suspendisse risus leo, placerat nec scelerisque eu, commodo vel sem. Proin odio ligula, rhoncus vitae auctor eget, tristique eget massa.
                        </p>
                    </div>
                </div>
            );
        break;

        case 'cy':
            return (
                <div className='about-parent'>
                    <div className='timeline'>
                        <h1>Amserlen</h1>
                        {populateCalendarCY()}
                    </div>
                    <div className='otherPane'>
                        <h1>Lorem ipsum</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus ante sed magna tempor ultricies. Sed vel dignissim diam. Vivamus imperdiet lectus et sem gravida, id ultrices ante interdum. Morbi feugiat massa sed accumsan gravida. Fusce nec eros ligula. Donec nec sem placerat, feugiat ante vel, vestibulum elit. Mauris non enim ante. Nunc sed dictum risus. Sed sollicitudin orci eu lacus pretium, id commodo felis sagittis.
                        </p>
                        <p>
                        Quisque sit amet felis rutrum, ultrices nisi sed, dictum eros. Nullam dictum quam eu nulla tincidunt lobortis. Mauris eget gravida neque. Mauris volutpat libero sed lacinia semper. Suspendisse auctor ligula at magna convallis, placerat faucibus lacus ullamcorper. Aenean varius sollicitudin diam, ut eleifend justo consectetur quis. Curabitur mi velit, pretium id sem in, ullamcorper maximus nisl. Aenean posuere sollicitudin eros, a interdum sem accumsan vitae. Etiam molestie lectus quis ex pharetra, non laoreet turpis congue. Nam finibus tortor justo, sit amet feugiat metus varius dignissim.
                        </p>
                        <p>
                        Nunc aliquam et nisi vitae cursus. Donec ultricies justo in purus maximus efficitur. Vivamus nec blandit mi. Morbi felis magna, porta sit amet lectus non, aliquam porttitor quam. Donec imperdiet nec elit facilisis varius. Suspendisse potenti. Suspendisse risus leo, placerat nec scelerisque eu, commodo vel sem. Proin odio ligula, rhoncus vitae auctor eget, tristique eget massa.
                        </p>
                    </div>
                </div>
            );
        break;
    }
}

export default About;