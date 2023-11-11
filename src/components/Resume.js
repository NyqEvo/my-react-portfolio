import React from 'react';
import resume from "./images/resume.png"

function Resume() {
    return (
        <div className='resume-container container-sm'>
            <img src={resume} alt='pic of resume' className='img-fluid' />
            <a href='https://drive.google.com/file/d/1WckZekqr-0QOJRc2sdnagoAk_x2NhJN2/view?usp=sharing' target='_blank' rel='noreferrer'><p>Click here to download my resume</p></a>
        </div>
    )
}

export default Resume;