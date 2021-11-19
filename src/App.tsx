import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './components/BookList'
import MainNavbar from "./components/MainNavbar";
import {Book} from "./types";
import ShoppingCart from "./components/ShoppingCart";

function App() {
    const [showCart, setShowCart] = useState<boolean>(false);
    const [bookSelection, setBookSelection] = useState<Book[]>([]);

    return (
        <div className="bg-dark ">
            <MainNavbar showCart={showCart}
                        setShowCart={setShowCart}/>
            <BookList bookSelection={bookSelection}
                      setBookSelection={setBookSelection}
            />
            <ShoppingCart bookSelection={bookSelection}
                          setBookSelection={setBookSelection}
                          show={showCart}
                          setShow={setShowCart}
            />
        </div>
    );
}

export default App;
