import './Contact.scss'

function Contact () {
 return (
    <div className='contact-form'>
        <p>
            Please fill out the form below.<br/>
            I'll email you back shortly!
        </p>

        <form action="https://public.herotofu.com/v1/7d5134b0-96f2-11ee-bbf6-afd56d9a4ea5" method="post" accept-charset="UTF-8">
            <label for="name">Name</label>
            <input name="Name" id="name" type="text" required />
            <label for="email">Email address</label>
            <input name="Email" id="email" type="email" required  />
            <input type="submit" value="Submit" />
        </form>
    </div>
    );
}

export default Contact;