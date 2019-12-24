import React, {useContext} from 'react'
import '../../../styles/Login.css'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

import Logo from '../../Common/Logo'
import {AuthContext} from "../../Context/AuthContext";

const AppHeader = (props) => {
    const {logout, authenticated} = useContext(AuthContext)

    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="brand">
                <Logo/>
                <Navbar.Brand href="#home">React-Redux-boilerplate</Navbar.Brand>
            </Nav>
            <Nav inline>
                {props.children.props.location.pathname === "/" ? null : (authenticated ?
                    <Button variant="outline-info" onClick={() => logout()}>Log out</Button> :
                    <Button variant="outline-info" onClick={() => props.history.push('/')}>Log in</Button>)}
            </Nav>
        </Navbar>)
}

export default AppHeader;