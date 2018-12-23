import React from 'react';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ path, title, showInNav, redirect, onClick }) => {
    if (!showInNav || redirect) {
        return null;
    }

    return (
        <NavItem>
            <NavLink
                onClick={onClick}
                className="nav-link"
                to={path}
                activeClassName="active"
            >
                {title}
            </NavLink>
        </NavItem>
    );
}

export default MenuItem;