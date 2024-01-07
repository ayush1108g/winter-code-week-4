import React from 'react';
import styles from './ContactUs.module.css';
import { useRef } from 'react';
import axios from 'axios';
import { ToLink } from '../App';

const ContactUs = () => {
    const name = useRef();
    const email = useRef();
    const message = useRef();

    const submitFeedHandler = async (event) => {
        event.preventDefault();
        const data = {
            name: name.current.value,
            email: email.current.value,
            message: message.current.value
        }
        if (data.name === '' || data.email === '' || data.message === '') return alert('Please fill in all fields!');
        if (!data.email.includes('@')) return alert('Please enter a valid email address!');
        try {
            const response = await axios.post(`${ToLink}/api/feedback`, data);
            console.log(response);
            alert('Thank you for your feedback!');
            name.current.value = '';
            email.current.value = '';
            message.current.value = '';
        } catch (error) {
            console.log(error);
            alert('Failed to send feedback!');
        }
    }
    return (
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <p>Reach out to us for any inquiries or feedback!</p>
            <form action='post' method="post" className={styles.form} onSubmit={submitFeedHandler}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required ref={name} />

                <label htmlFor="email">Email:</label>
                <input required ref={email} />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" ref={message} required></textarea>

                <button type="submit">Submit</button>

            </form>
        </div>
    );
};

export default ContactUs;
