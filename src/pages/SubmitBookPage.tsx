import Button from "../components/Button";
import {backButtonHandler, submitButtonHandler} from "../handler/buttonHandler";
import Header from "../components/Header";
import InputField from "../components/InputField";
import React from "react";
import "../constants/styles/mainpage.css"
import {
    AUTHOR_NAME_TEXT,
    BACK_TEXT,
    BOOK_TITLE_TEXT,
    GENRE_TEXT,
    NUMBER_OF_PAGES_TEXT,
    PUBLISHED_YEAR_TEXT,
    SUBMIT_A_BOOK_WITH_US_TEXT,
    SUBMIT_TEXT
} from "../constants/strings/strings";
import useFetch from "../hooks/useFetch";
import {BookResponseBody} from "../service/responseBodyModel";
import {GET_BOOK_BY_ID} from "../service/bookEndpoint";

const SubmitBookPage = () => {

    return (
        <div>
            <div className={"buttonContainer"}>
                <Button text={BACK_TEXT} onClickHandler={backButtonHandler}/>
                <Button text={SUBMIT_TEXT} onClickHandler={submitButtonHandler}/>
            </div>
            <Header text={SUBMIT_A_BOOK_WITH_US_TEXT}/>
            <div className={"inputFieldContainer"}>
                <InputField hint={BOOK_TITLE_TEXT}/>
                <InputField hint={PUBLISHED_YEAR_TEXT}/>
                <InputField hint={AUTHOR_NAME_TEXT}/>
                <InputField hint={GENRE_TEXT}/>
                <InputField hint={NUMBER_OF_PAGES_TEXT}/>
            </div>
        </div>
    )
}

export default SubmitBookPage;