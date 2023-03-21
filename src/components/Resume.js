import React from 'react';
import resume from "./images/resume.png"
import './Resume.css'

function Resume() {
    return (
        <div className='resume-container'>
            <img src={resume} alt='picture of my resume' />
            <a href='https://drive.google.com/file/d/1WckZekqr-0QOJRc2sdnagoAk_x2NhJN2/view?usp=sharing' target='_blank'><p>Click here to download my resume</p></a>
        </div>
    )
}

export default Resume;