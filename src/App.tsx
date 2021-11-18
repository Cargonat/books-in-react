import React from 'react';
import BookList from './components/BookList'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Container>
                <BookList/>
            </Container>
        </div>
    );
}

export default App;
