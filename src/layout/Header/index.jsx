import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import routes from '../../routes';
import MenuItem from './MenuItem';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    toggleCollapse = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { isOpen } = this.state;

        return (
            <header>
                <Navbar light expand="sm" fixed="top">
                    <NavbarBrand href="/">
                        <FontAwesomeIcon className="mr-3" size="lg" icon="camera-retro" />
                        React Publications
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleCollapse} />
                    {!!routes && !!routes.length && (
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                {routes.map((route, index) => {
                                    return <MenuItem key={index} onClick={isOpen ? this.toggleCollapse : null} {...route} />
                                })}
                            </Nav>
                        </Collapse>
                    )}
                </Navbar>
            </header>
        );
    }
}

export default Header;