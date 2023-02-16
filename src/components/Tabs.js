import React from 'react';
import './Tabs.css'

const Tabs = (props) => {
    console.log(props) // { page: "home", setPage: fn() }
    //const pages = ["home", "projects", "contact"]
    //const [currentPage, setCurrentPage] = useState('home');

    // const [currentPage, setCurrentPage] = useState(pages[0]);
    // if we want to style the ACTIVE link different
    // const [activePage, setActivePage] = useState(props.page)  // "home"

    return (
        <div className="tabs-container">
            <ul>
                <li
                    className='link'
                    name="home"
                    value="home"
                    onClick={() => props.setPage('home')}>Home</li>
                <li
                    className='link'
                    name="projects"
                    value="projects"
                    onClick={() => props.setPage('projects')}>Projects</li>
                 <li
                    className='link'
                    name="contact"
                    value="contact"
                    onClick={() => props.setPage('contact')}>Contact</li>
            </ul>
        </div>
    )
}



export default Tabs;