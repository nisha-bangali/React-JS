import { useState } from "react";
import HomePage from "./Home";
import './css/contact.css'

function ContactPage() {

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <div className="container">
            <div className="contact-info">
                <h3>Our Information</h3>
                <p><strong>Address:</strong> 123 Main Street, Your City, Country</p>
                <p><strong>Phone:</strong> +123-456-7890</p>
                <p><strong>Email:</strong> contact@example.com</p>
            </div>
            <form className="contact-form">
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
            </div>
        </div>
    );
}

export default ContactPage;
