import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = props => {
    const { title, icon } = props
    return (
        <div className="navbar bg-primary">
            <h1><i className={icon}></i> {title}</h1>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </div>
    )
}

// Adding default Props
NavBar.defaultProps = {
    title: "Github-Finder",
    icon: "fab fa-github"
}

// Adding Prop Types
NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default NavBar;
