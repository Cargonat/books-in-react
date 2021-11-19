import React from 'react';
import {Book} from "../types";
import {Card} from "react-bootstrap";

function BookCard(props: { book: Book }) {
    const book = props.book;
    if (!book) {
        return <div/> // return empty div to keep row spacing
    }
    return <Card bg="dark" text="light" className="my-5">
        <Card.Img variant="top" src={book.imageUrlLarge}/>
        <Card.Title>{book.title}</Card.Title>
        <Card.Subtitle>{book.author}</Card.Subtitle>
        <Card.Footer className="text-muted">
            {book.publisher}, {book.year}
        </Card.Footer>
    </Card>
}

export default BookCard;