import Footer from './Footer';
import React, { useState } from "react";

const Contact = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log({ fullname, email, description});
    };

    return(
        <>
            <div className='over-contact' >
                <div className='about-contact'>
                    <center><h2> Contact form </h2></center>
                    <p>If you want to inform about something, or if you just have questions just use it as contact form</p>
                    <div className='contact-form'>
                        <form onSubmit={handleSubmit}>
                            <label className='label' htmlFor="fullname">Full name: </label>
                            <input 
                                type="fullname"
                                id="fullname"
                                placeholder='Full name: '
                                value={fullname}
                                onChange={(event) => setFullname(event.target.value)}
                                />
                            <label className='label' htmlFor="contact-email">Email: </label>
                            <input
                                type="contact-email"
                                id="contact-email"
                                placeholder="your-email@gmail.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                />
                            <label className='label' htmlFor="description">Comment </label>
                            <input
                                type="description"
                                id="description"
                                placeholder="Add description: "
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
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