import Footer from './Footer';
import React, { useState } from "react";

const Contact = () => {
    const [formState, setFormState] = useState({});

    const changeHandler = (event) => {
        setFormState({...formState, [event.target.event]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const config = {
            Username: process.env.USERNAME,
            Password: process.env.PASSWORD,
            Host: process.env.HOST,
            Port: process.env.PORT,
            To: process.env.TO,
            From: formState.email,
            From : formState.email,
            Subject : "This is the subject contact form",
            Body : `${formState.name} connected to you over email, ${formState.description}`
        }

        if (window.Email) {
            window.Email.send(config)
            .then(() => alert('Email sent succesfully'))
            .catch((err) => console.error(err));
        }
    };

    return(
        <>
            <div className='over-contact' >
                <div className='about-contact'>
                    <center><h2> Contact form </h2></center>
                    <center><p>If you want to inform about something, or if you just have questions just use this contact form</p></center>
                    <div className='contact-form'>
                        <form onSubmit={handleSubmit}>
                            <label className='label' htmlFor="fullname">Full name: </label>
                            <input 
                                type="fullname"
                                id="fullname"
                                placeholder='Full name: '
                                value={formState.name}
                                onChange={changeHandler}
                                />
                            <label className='label' htmlFor="contact-email">Email: </label>
                            <input
                                type="contact-email"
                                id="contact-email"
                                placeholder="your-email@gmail.com"
                                value={formState.email}
                                onChange={changeHandler}
                                />
                            <label className='label' htmlFor="description">Comment </label>
                            <input
                                type="description"
                                id="description"
                                placeholder="Add description: "
                                value={formState.description}
                                onChange={changeHandler}
                                />
                            <div className='under-form'>
                                <button className="contact-btn" type="submit">Send now!</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        <Footer />
        </>
    );
}

export default Contact;