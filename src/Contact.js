import './Contact.scss'

function Contact () {
 return (
    <div>
        <form action="https://public.herotofu.com/v1/7d5134b0-96f2-11ee-bbf6-afd56d9a4ea5" method="post" accept-charset="UTF-8" className='contact-form'>
            <label for="name">Your Name</label>
            <input name="Name" id="name" type="text" required />
            <label for="email">Your Email</label>
            <input name="Email" id="email" type="email" required  />
            <input type="submit" value="Download CTA" />
        </form>
    </div>
    );
}

export default Contact;