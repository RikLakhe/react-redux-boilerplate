import React,{useContext} from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

import Logo from '../../Common/Logo'
import {AuthContext} from "../../Context/AuthContext";

const AppHeader = () => {
    const {logout} = useContext(AuthContext)

    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Logo/>
                <Navbar.Brand href="#home">React-Redux-boilerplate</Navbar.Brand>
            </Nav>
            <Nav inline>
                <Button variant="outline-info" onClick={() => logout()}>Log In</Button>
            </Nav>
        </Navbar>)
}

const alertLogin = () => {
    alert('login');
}

export default AppHeader;