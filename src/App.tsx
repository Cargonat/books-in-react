import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './components/BookList'
import MainNavbar from "./components/MainNavbar";

function App() {
    return (
        <div className="bg-dark ">
            <MainNavbar/>
            <BookList/>
        </div>
    );
}

export default App;
