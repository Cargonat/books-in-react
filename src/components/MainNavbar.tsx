import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {StateProps} from "../types";

function MainNavbar({state, setState}: StateProps) {
    function showCart() {
        state = Object.assign(state, {showCart: true})
        setState(state);
    }

    return <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand>
                An Awesome Bookstore
            </Navbar.Brand>
            <Nav>
                <Nav.Link>Books</Nav.Link>
                <Nav.Link
                    onClick={showCart}>
                    Shopping Cart
                </Nav.Link>
            </Nav>
        </Container>
    </Navbar>
}

export default MainNavbar;