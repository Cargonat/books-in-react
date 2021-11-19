import React, {Dispatch, SetStateAction} from 'react';
import BookCard from "./BookCard";
import {Col, Container, Row} from "react-bootstrap";
import {Book} from "../types";
import booksJson from "../data/books-first-200.json"


function getBooks(): Book[] {
    return booksJson.sort((a, b) => 0.5 - Math.random());
}

function getBookRows(books: Book[]): Book[][] {
    const row_length = 6;
    // make empty 2D array of desired size and fill it with null
    let book_rows: Book[][] = Array(Math.ceil(books.length / row_length))
        .fill(null)
        .map(_ => Array(row_length)
            .fill(null))

    // put books from list into 2D array
    for (let i = 0; i < books.length; i++) {
        let row = Math.floor(i / row_length)
        let col = i % row_length;
        book_rows[row][col] = books[i];
    }

    return book_rows;
}

function BookList(props: {
    bookSelection: Book[],
    setBookSelection: Dispatch<SetStateAction<Book[]>>,
}) {
    const books: Book[] = getBooks();
    const book_rows: Book[][] = getBookRows(books);

    return (
        <Container className="w-50">
            {book_rows.map(row => <Row>
                {row.map(book => <Col xs={6} md={4}>
                    <BookCard book={book}/>
                </Col>)}
            </Row>)}
        </Container>
    );
}

export default BookList;
