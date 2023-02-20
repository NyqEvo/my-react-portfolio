import React from 'react';
import resume from "./images/resume.png"
import './Resume.css'

function Resume() {
    return (
        <div className='resume-container'>
            <img src={resume} alt='picture of my resume' />
            <a href='https://drive.google.com/file/d/1qyl8QqzuwrfDc6K_dY0h-RxETW3Kt6sJ/view?pli=1' target='_blank'><p>Click here to download my resume</p></a>
        </div>
    )
}

export default Resume;