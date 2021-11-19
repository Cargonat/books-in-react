import React, {Dispatch, SetStateAction} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

function MainNavbar(props: {
    showCart: boolean,
    setShowCart: Dispatch<SetStateAction<boolean>>
}) {
    return <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand>
                An Awesome Bookstore
            </Navbar.Brand>
            <Nav>
                <Nav.Link>Books</Nav.Link>
                <Nav.Link
                    onClick={() => props.setShowCart(!props.showCart)}>
                    Shopping Cart
                </Nav.Link>
            </Nav>
        </Container>
    </Navbar>
}

export default MainNavbar;