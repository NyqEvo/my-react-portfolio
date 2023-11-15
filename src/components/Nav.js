import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.scss';

const Nav = () => {

    return (
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
        </div>
    )
}

export default Nav;