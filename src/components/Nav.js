import React from 'react';
//import './Tabs.css';
// import ContactTab from './tab_components/contactTab';
// import HomeTab from './tab_components/homeTab';
// import ProjectTab from './tab_components/projectTab';
// import Home from './Home';
// import Projects from './Projects';
// import Contact from './Contact';
import { NavLink } from 'react-router-dom';





const Nav = () => {

    // const location = useLocation();

    return (
        // <div className="tabs-container container-fluid justify-content-center">
        //     <ul className='nav nav-tabs'>
        //     <HomeTab page={props.page} setPage={props.setPage}/>
        //     <ProjectTab page={props.page} setPage={props.setPage}/>
        //     <ContactTab page={props.page} setPage={props.setPage}/>

        //     </ul>
        // </div>

        
            <div>
                <nav className='navbar navbar-expand-lg justify-content-center'>
                    <ul className='nav nav-tabs'>
                        <li className='navbar-item'>
                            <NavLink to="/" className='nav-link' activeclass="active" exact="true">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Projects" className="nav-link" activeclass="active" exact="true">
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Contact" className="nav-link" activeclass="active" exact="true">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <hr />

                {/* <Routes>
                    <Route path="/" element={<Home title="Home" content="Tab for Home Component" />}>

                    </Route>
                    <Route path="/Projects" element={<Projects title="Projects" content="Tab for Project Component" />}>

                    </Route>
                    <Route path="/Contact" element={<Contact title="Contact" content="Tab for Contact Component" />}>

                    </Route>
                </Routes> */}
            </div>
    )
}



export default Nav;