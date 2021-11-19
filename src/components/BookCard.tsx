import React from 'react';
import {Book, StateProps} from "../types";
import {Card, ToggleButton} from "react-bootstrap";


function BookCard({state, setState, book}: StateProps & { book: Book }) {
    function isSelected() {
        return state.bookSelection.includes(book);
    }

    function selectBook() {
        const newSelection = state.bookSelection;
        newSelection.push(book);
        setState(Object.assign(state, {bookSelection: newSelection}))
    }

    function unselectBook() {
        setState(Object.assign(state, {bookSelection: state.bookSelection.filter(b => b !== book)}))
    }

    if (!book) {
        return <div/> // return empty div to keep row spacing
    }
    return <Card bg="dark" text="light" className="my-5">
        <Card.Img variant="top" src={book.imageUrlLarge}/>
        <Card.Title>{book.title}</Card.Title>
        <Card.Subtitle>{book.author}</Card.Subtitle>
        <Card.Body>
            <ToggleButton variant="primary"
                          id={"buy-button-" + book.isbn}
                          value=""
                          type="checkbox"
                          checked={isSelected()}
                          onChange={_ => {
                              isSelected() ? unselectBook() : selectBook();
                          }}>
                {isSelected() ? "Remove" : "Buy"}
            </ToggleButton>
        </Card.Body>
        <Card.Footer className="text-muted">
            {book.publisher}, {book.year}
        </Card.Footer>
    </Card>
}

export default BookCard;