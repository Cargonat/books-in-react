import React from 'react';
import BookCard from "./BookCard";
import {Col, Container, Row} from "react-bootstrap";
import {Book} from "../types";


function getSampleBook() {
    const sample_book: Book = {
        title: "My book title",
        author: {
            name: "Some Dude",
            picture_url: "https://thumbs.dreamstime.com/z/happy-young-author-typing-typewriter-just-inspired-nerd-something-looking-camera-sitting-his-working-place-48755642.jpg"
        },
        description: "This is a book about a lot of important stuff.",
        reviews: [],
        price: 20,
        year: 2000,
        edition: 3,
        cover_url: "https://imgcdn.saxo.com/_9780671212094",
    };
    return sample_book;
}

function getBooks(): Book[] {
    return Array(11).fill(getSampleBook());
}

function getBookRows(books: Book[]): Book[][] {
    const row_length = 4;
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
        console.log({row, col, i, book_rows})
    }

    return book_rows;
}

function BookList() {
    const books = getBooks();
    const book_rows = getBookRows(books);

    return (
        <Container>
            {book_rows.map(row => <Row>
                {row.map(book => <Col>
                    <BookCard book={book}/>
                </Col>)}
            </Row>)}
        </Container>
    );
}

export default BookList;
