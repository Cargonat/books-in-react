import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

function MainNavbar() {
    return <Navbar bg="dark" variant="dark" expand="lg" >
        <Container>
            <Navbar.Brand>
                An Awesome Bookstore
            </Navbar.Brand>
            <Nav>
                <Nav.Link>Books</Nav.Link>
                <Nav.Link>Authors</Nav.Link>
                <Nav.Link>Checkout</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
}

export default MainNavbar;