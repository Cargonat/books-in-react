import {Dispatch, SetStateAction} from "react";

export interface Book {
    isbn: string,
    title: string,
    author: string,
    year: number,
    publisher: string
    imageUrlSmall: string,
    imageUrlMedium: string,
    imageUrlLarge: string,
}

export interface State {
    showCart: boolean,
    bookSelection: Book[],
}

export interface StateProps {
    state: State,
    setState: Dispatch<SetStateAction<State>>
}