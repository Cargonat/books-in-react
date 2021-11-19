import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './components/BookList'
import MainNavbar from "./components/MainNavbar";
import {State} from "./types";
import ShoppingCart from "./components/ShoppingCart";

function App() {
    let [state, setState] = useState<State>({
        showCart: false,
        bookSelection: []
    })


    return (
        <div className="bg-dark ">
            <MainNavbar state={state} setState={setState}/>
            <BookList state={state} setState={setState}/>
            <ShoppingCart state={state} setState={setState}/>
        </div>
    );
}

export default App;
