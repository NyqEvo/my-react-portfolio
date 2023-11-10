import React from 'react';
//import "./Contact.css"
import gitImg from "./images/github-small.png"
import linkedinImg from "./images/linkedin-small.svg"


const Contact = () => {

    return (
        <div className="contact-container container-lg">
            <h3>Contact Me</h3>
            <ul>
                <li><a href='https://github.com/NyqEvo' target="_blank" rel='noreferrer'><img src={gitImg} alt='GitHub Icon'/>GitHub</a></li>
                <li><a href='https://www.linkedin.com/in/xavier-vergara/' target='_blank' rel='noreferrer'><img src={linkedinImg} alt='LinkedIn Icon'/>LinkedIn</a></li>
                <li id="email" onClick={() => window.location = 'mailto:xav.vergara13@gmail.com'}>xav.vergara13@gmail.com</li>
            </ul>

        </div>
    )
}



export default Contact;