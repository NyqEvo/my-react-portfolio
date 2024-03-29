import React from 'react';

import gitImg from "./images/github-small.png"
import linkedinImg from "./images/linkedin-small.svg"


const Contact = () => {

    return (
        <div className="contact-container d-flex flex-column justify-content-center">
            <h3 className='text-center align-self-center justify-self-start py-5 my-5'>Contact Me</h3>
            <ul className='d-flex flex-column justify-content-center align-items-center px-1'>
                <li className='container-xs text-center align-self-center justify-self-center py-5 my-5'>
                    <a href='https://github.com/NyqEvo' target="_blank" rel='noreferrer'>
                        <img src={gitImg} alt='GitHub Icon' className='rounded-circle' />
                        GitHub
                    </a>
                </li>
                <li className='container-xs text-center align-self-center justify-self-center py-5 my-5'>
                    <a href='https://www.linkedin.com/in/xavier-vergara/' target='_blank' rel='noreferrer'>
                        <img src={linkedinImg} alt='LinkedIn Icon' className='rounded-circle'/>
                        LinkedIn
                    </a>
                </li>
                <li className='container-xs text-center align-self-center justify-self-center py-5 my-5' id="email" onClick={() => window.location = 'mailto:xav.vergara13@gmail.com'}>
                    xav.vergara13@gmail.com
                </li>
            </ul>
        </div>
    )
}



export default Contact;