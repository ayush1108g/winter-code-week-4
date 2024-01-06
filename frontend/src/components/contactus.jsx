import React from 'react';
import styles from './ContactUs.module.css'; // Import your CSS module
import { useRef } from 'react';
const ContactUs = () => {
    const name = useRef();
    const email = useRef();
    const message = useRef();
   function passvalue(){
   console.log(name.current.value);
const data = {
    name: name.current.value,
    email: email.current.value,
    message: message.current.value
}
console.log(data);
   }
    return (
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <p>Reach out to us for any inquiries or feedback!</p>
            <form action="mailto:info@yourdomain.com" method="post" encType="text/plain" className={styles.form} onSubmit={passvalue}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required ref={name} />
                
                <label htmlFor="email">Email:</label>
                <input  required ref={email} />
                
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
                
                <input type="submit" value="Submit"  ref={message}/>
            </form>
        </div>
    );
};

export default ContactUs;
