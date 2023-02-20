import React from 'react';
import './Tabs.css';
import ContactTab from './tab_components/contactTab';
import HomeTab from './tab_components/homeTab';
import ProjectTab from './tab_components/projectTab';





const Tabs = (props) => {
    console.log(props) 

    return (
        <div className="tabs-container">
            <ul>
            <HomeTab page={props.page} setPage={props.setPage}/>
            <ProjectTab page={props.page} setPage={props.setPage}/>
            <ContactTab page={props.page} setPage={props.setPage}/>

            </ul>
        </div>
    )
}



export default Tabs;