import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.scss';





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

        
            <div className='nav-container'>
                <nav className='navbar navbar-expand-xl nav-fill justify-content-evenly'>
                    <ul className='nav container-fluid nav-tabs'>
                        <li className='navbar-item container-sm'>
                            <NavLink to="/" className='nav-link' activeclass="active" exact="true">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item container-sm">
                            <NavLink to="/Projects" className="nav-link" activeclass="active" exact="true">
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item container-sm">
                            <NavLink to="/Contact" className="nav-link" activeclass="active" exact="true">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>

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