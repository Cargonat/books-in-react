import React, {Dispatch, SetStateAction} from 'react';
import {Book} from "../types";
import {Offcanvas} from "react-bootstrap";
import ShoppingCartItem from "./ShoppingCartItem";

function ShoppingCart(props: {
    bookSelection: Book[],
    setBookSelection: Dispatch<SetStateAction<Book[]>>,
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>,
}) {
    return <Offcanvas
        show={props.show}
        onHide={() => props.setShow(false)}
        placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>
                Shopping Cart
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {props.bookSelection.map(book => <ShoppingCartItem book={book}/>)}
        </Offcanvas.Body>
    </Offcanvas>
}

export default ShoppingCart;