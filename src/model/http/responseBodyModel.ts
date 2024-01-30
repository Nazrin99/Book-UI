export interface BookResponseBody {
    bookId: number;
    bookTitle: string;
    publishedYear: number;
    genre: string;
    authorName: string;
    numberOfPages: number;
}

export interface MessageResponseBody {
    message: string;
}