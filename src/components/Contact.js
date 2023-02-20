import React from 'react';
import { Link } from "react-router-dom";
import "./Contact.css"


const Contact = () => {

    return (
        <div className="contact-container">
            <h3>Contact Me</h3>
            <ul>
                <li><a href='https://github.com/NyqEvo' target="_blank">GitHub</a></li>
                <li><a href='https://www.linkedin.com/in/xavier-vergara/'>LinkedIn</a></li>
                <li id="email" onClick={() => window.location = 'mailto:xav.vergara13@gmail.com'}>xav.vergara13@gmail.com</li>
            </ul>

        </div>
    )
}



export default Contact;