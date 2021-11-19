import React from 'react';
import {StateProps} from "../types";
import {Button, Offcanvas} from "react-bootstrap";
import ShoppingCartItem from "./ShoppingCartItem";

function ShoppingCart({state, setState}: StateProps) {
    return <Offcanvas
        show={state.showCart}
        onHide={() => setState(Object.assign(state, {showCart: false}))}
        placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>
                Shopping Cart
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {state.bookSelection.map(book => <ShoppingCartItem book={book}/>)}
            <br/>
            <Button value="" onClick={() => {
                setState(Object.assign(state, {showCart: false, bookSelection: []}))
            }}>
                Clear cart
            </Button>
        </Offcanvas.Body>
    </Offcanvas>
}

export default ShoppingCart;