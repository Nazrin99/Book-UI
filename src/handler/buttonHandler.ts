import {MouseEventHandler} from "react";
import {
    AUTHOR_NAME_TEXT,
    BOOK_TITLE_TEXT,
    GENRE_TEXT,
    NUMBER_OF_PAGES_TEXT,
    PUBLISHED_YEAR_TEXT
} from "../constants/strings/strings";
import {ADD_BOOK, BookEndpoint} from "../service/bookEndpoint";
import {getBasicAuthHeader} from "../hooks/useFetch";
import {BookRequestBody} from "../model/http/requestBodyModel";
import {useNavigate} from "react-router-dom";

export const submitButtonHandler: MouseEventHandler = async () => {
    let inputFields = document.getElementsByClassName("inputField") as HTMLCollectionOf<HTMLInputElement>

    let requestBody: BookRequestBody = {
        bookTitle: inputFields.namedItem(BOOK_TITLE_TEXT)!.value,
        publishedYear: parseInt(inputFields.namedItem(PUBLISHED_YEAR_TEXT)!.value),
        genre: inputFields.namedItem(GENRE_TEXT)!.value,
        authorName: inputFields.namedItem(AUTHOR_NAME_TEXT)!.value,
        numberOfPages: parseInt(inputFields.namedItem(NUMBER_OF_PAGES_TEXT)!.value)
    }

    let apibundle: BookEndpoint = ADD_BOOK<BookRequestBody>(requestBody)
    fetch(apibundle.url, {
        method: apibundle.method,
        headers: {
            'Authorization': getBasicAuthHeader(),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(apibundle.body)
    }).then(response => {
        if (!response.ok) {
            throw new Error(`Unable to insert book into database: ${response.status}`)
        }
        else {
            inputFields.namedItem(BOOK_TITLE_TEXT)!.value = ""
            inputFields.namedItem(PUBLISHED_YEAR_TEXT)!.value = ""
            inputFields.namedItem(GENRE_TEXT)!.value = ""
            inputFields.namedItem(AUTHOR_NAME_TEXT)!.value = ""
            inputFields.namedItem(NUMBER_OF_PAGES_TEXT)!.value = ""
        }
    })
}