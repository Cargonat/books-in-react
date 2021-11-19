import React from "react";
import {Book} from "../types";
import {Card} from "react-bootstrap";

function ShoppingCartItem(props: { book: Book }) {
    return <Card>{props.book.title}</Card>
}

export default ShoppingCartItem;