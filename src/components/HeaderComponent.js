import React, {Component} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from "reactstrap";
import {NavLink} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }
    }

    toggleNav = () => {
        this.setState({isNavOpen: !this.state.isNavOpen});
    }

    render() {
        return (
            <div className="fixed-top bg-light">
                <Navbar light expand="md">
                    <div className="container mt-3">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand>Lawyer Office</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar className="justify-content-end">
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home" onClick={() => {
                                        if (this.state.isNavOpen) this.toggleNav()
                                    }}>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/services" onClick={() => {
                                        if (this.state.isNavOpen) this.toggleNav()
                                    }}>Services</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/usecases" onClick={() => {
                                        if (this.state.isNavOpen) this.toggleNav()
                                    }}>Use Cases</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus" onClick={() => {
                                        if (this.state.isNavOpen) this.toggleNav()
                                    }}>About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus" onClick={() => {
                                        if (this.state.isNavOpen) this.toggleNav()
                                    }}>Contact Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/faq" onClick={() => {
                                        if (this.state.isNavOpen) this.toggleNav()
                                    }}>FAQ</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;