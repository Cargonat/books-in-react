import React from 'react';
import {Book} from "../types";
import {Card} from "react-bootstrap";


function BookCard(props: { book: Book }) {
    const book = props.book;
    if (!book) {
        return <div/> // return empty div to keep row spacing
    }
    return <Card bg="dark" text="light" className="my-5">
        <Card.Img variant="top" src={book.cover_url}/>
        <Card.Title>{book.title}</Card.Title>
        <Card.Subtitle>{book.author.name}</Card.Subtitle>
        <Card.Body>
            <Card.Text>
                {book.description}
            </Card.Text>
        </Card.Body>
    </Card>
}

export default BookCard;