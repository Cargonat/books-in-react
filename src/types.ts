export interface Book {
    author: Author,
    cover_url?: string,
    description: string,
    title: string,
    reviews: Review[],
    price: number,
    year: number,
    edition: number,
}

export interface Author {
    name: string,
    picture_url: string,
}

export interface Review {
    rating: number,
    title: string,
    description: string,
    reviewer: Profile,
}

export interface Profile {
    name: string,
    email: string,
}