import React from 'react';
import resume from "./images/resume.png"
import '../styles/resume.scss';

function Resume() {
    return (
        <div className='container-sm text-center border border-light border-4 rounded p-4' id='resume'>
            <img src={resume} alt='pic of resume' className='img-fluid text-center' />
            <a href='https://drive.google.com/file/d/1WckZekqr-0QOJRc2sdnagoAk_x2NhJN2/view?usp=sharing' target='_blank' rel='noreferrer' className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'><p className='m-2'>Click here to download my resume</p></a>
        </div>
    )
}

export default Resume;