import './About.scss';

const dateEN = [
    {
        id: 0,
        date: 'Jan 2006',
        title: 'Hello World',
        body: 'My first day on Earth'
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
    },

    {
        id: 2,
        date:  'Sept 2010',
        title: 'Primary School',
        body: 
        <>
            I went to <a href='https://www.ysgolpencae.cymru/'>Ysgol Pencae</a>. Here the foundations of my knowledge were built.
        </>
    },

    {
        id: 3,
        date:  'June 2016',
        title: 'Scratch',
        body: 
        <>
            In Year 5, we were lucky enough to go to <a href='https://cardiffhubs.co.uk/hub/central-library-hub/'>Cardiff Central Library</a> for a <a href='https://scratch.mit.edu/'>Scratch</a> Workshop.
            Here I was exposed to Computer Science for the first time. The first thing I did when I went home was download <a href='https://scratch.mit.edu/'>Scratch</a> and started to figure things out.
        </>
    },

    {
        id: 4,
        date:  'Sept 2017',
        title: 'Secondary School',
        body: 
        <>
            Starting secondary school was daunting. Despite this I settled quite quickly in <a href='https://www.glantaf.cymru/'>Glantaf</a>.
            I enjoyed the more formal maths and science lessons. In Year 9 we got to choose 3 options, I chose German, Geography, and Computer Science.
        </>
    },

    {
        id: 5,
        date:  'June 2022',
        title: 'GCSE Exams',
        body: 
        <>
            These were my first exam experience. Coming from Covid-19, it was quite scary.
            I obtained 7A* and 5A.
        </>
    },

    {
        id: 6,
        date:  'Sept 2022',
        title: 'Joining 6th Form',
        body: 
        <>
            I couldn't wait to dig deeper into subjects that interest me, and to drop subjects that didn't.
        </>
    },

    {
        id: 7,
        date:  'June 2023',
        title: 'AS Exams',
        body: 
        <>
            I prepared far more this time around, as a result I performed well - achieving 4 A.
        </>
    }
];

const dateCY = [
    {
        id: 0,
        date: 'Ion 2006',
        title: 'Hello fyd',
        body: 'Fy niwrnod cyntaf ar y Ddaear'
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
    },

    {
        id: 2,
        date:  'Medi 2010',
        title: 'Ysgol Gynradd',
        body: 
        <>
            <a href='https://www.ysgolpencae.cymru/'>Ysgol Pencae</a> oedd yr ysgol gynradd es i iddi. Mae sail fy ngwybodaeth i gyd wedi dod o fan hyn.
        </>
    },

    {
        id: 3,
        date:  'Meh 2016',
        title: 'Scratch',
        body: 
        <>
            Ym mlwyddyn 5, cawsom ni'r fraint o fynd i <a href='https://cardiffhubs.co.uk/hub/central-library-hub/'>Lyfrgell Canolog Caerdydd</a> er mwyn mynd i sessiwn <a href='https://scratch.mit.edu/'>Scratch</a>.
            Dyma ble welais i Cyfrifiadureg am y tro cyntaf. Ar ôl y sessiwn, y peth cyntaf wnes i oedd lawr-lwytho <a href='https://scratch.mit.edu/'>Scratch</a> a dechrau chwarae o gwmpas gyda hi.
        </>
    },

    {
        id: 4,
        date:  'Medi 2017',
        title: 'Ysgol Uwchradd',
        body: 
        <>
            Roedd dechrau'r ysgol uwchradd yn codi ofn arna i. Er hyn, ffeindiais i fy lle yn eithaf cyflym yng <a href='https://www.glantaf.cymru/'>Nglantaf</a>.
            Mwynhaiais i'r gwersi maths a gwyddoniaeth mwy ffurfiol. Ym mlwyddyn 9 dewisom ni 3 opsiwn, dewisais I Almaeneg, Daearyddiaeth, a Chyfrifiadureg.
        </>
    },

    {
        id: 5,
        date:  'Meh 2022',
        title: 'Arholiadau TGAU',
        body: 
        <>
            Dyma oedd fy arholiadau cyntaf. Yn dilyn o Covid-19, roedd yn eithaf brawychus. Llwyddais i gael 7A* a 5A.
        </>
    },

    {
        id: 6,
        date:  'Medi 2022',
        title: 'Ymuno â\'r Chweched Dosbarth',
        body: 
        <>
            Doeddwn i ddim yn gallu aros i ddysgu mwy am y pynciau rwy'n ymddiddori ynddynt, ag i ollwng y pynicau doeddwn I ddim yn mwynhau cymaint.
        </>
    },

    {
        id: 7,
        date:  'Meh 2023',
        title: 'Arholiadau UG',
        body: 
        <>
            Adolygais i llawer mwy y tro yma, o ganlyniad o hyn perfformiais i'n dda. Cefais i 4 A.
        </>
    }
];

function populateCalendarEN() {
    const events = dateEN.toReversed().map(date => <>
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
    const events = dateCY.toReversed().map(date => <>
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
                        { populateCalendarEN() }
                    </div>

                    <div className='about-me-pane'>
                        <h1>Trips</h1>
                    </div>
                </div>
            );
        break;

        case 'cy':
            return (
                <div className='about-parent'>
                    <div className='timeline'>
                        <h1>Amserlen</h1>
                        { populateCalendarCY() }
                    </div>
                    
                    <div className='about-me-pane'>
                        <h1>Trips</h1>
                    </div>
                </div>
            );
        break;
    }
}

export default About;