import React from 'react';

import gitImg from "./images/github-small.png"
import linkedinImg from "./images/linkedin-small.svg"


const Contact = () => {

    return (
        <div className="contact-container d-flex flex-column justify-content-center align-content-stretch">
            <h3 className='text-center'>Contact Me</h3>
            <ul>
                <li className='container-xs text-center'>
                    <a href='https://github.com/NyqEvo' target="_blank" rel='noreferrer'>
                        <img src={gitImg} alt='GitHub Icon' className='img-thumbnail rounded-circle' />
                        GitHub
                    </a>
                </li>
                <li className='container-xs text-center'>
                    <a href='https://www.linkedin.com/in/xavier-vergara/' target='_blank' rel='noreferrer'>
                        <img src={linkedinImg} alt='LinkedIn Icon' />
                        LinkedIn
                    </a>
                </li>
                <li className='container-xs text-center' id="email" onClick={() => window.location = 'mailto:xav.vergara13@gmail.com'}>
                    xav.vergara13@gmail.com
                </li>
            </ul>
        </div>
    )
}



export default Contact;