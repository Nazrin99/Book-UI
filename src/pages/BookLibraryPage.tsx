import useFetch from "../hooks/useFetch";
import {BookResponseBody} from "../model/http/responseBodyModel";
import {GET_ALL_BOOK} from "../service/bookEndpoint";
import Button from "../components/Button";
import {
	LOOK_THROUGH_WHAT_WE_HAVE_TEXT,
	NEXT_TEXT,
	PREVIOUS_TEXT,
	SUBMIT_SOMETHING_TEXT
} from "../constants/strings/strings";
import Header from "../components/Header";
import "../constants/styles/mainpage.css"
import TextView from "../components/TextView";
import {MouseEventHandler, useState} from "react";
import {useNavigate} from "react-router-dom";

export const BookLibraryPage = () => {
	const {data, loading} = useFetch<BookResponseBody[]>(GET_ALL_BOOK)
	const [index, setIndex] = useState(0)
	const navigate = useNavigate()

	const nextButtonHandler: MouseEventHandler = () => {
		setIndex(index + 1)
	}

	const previousButtonHandler: MouseEventHandler = () => {
		setIndex(index - 1)
	}
	
	return (
		<div>
			<div className={"buttonContainer"} style={{justifyContent: "flex-end"}}>
				<Button text={SUBMIT_SOMETHING_TEXT} onClickHandler={() => {
					navigate("/submit-page")
				}} />
			</div>
			<Header text={LOOK_THROUGH_WHAT_WE_HAVE_TEXT} />
			<div className={"textViewContainer"}>
				<TextView text={data ? data[index].bookTitle : ""} />
				<TextView text={data ? data[index].publishedYear.toString(): ""} />
				<TextView text={data ? data[index].genre : ""} />
				<TextView text={data ? data[index].authorName : ""} />
				<TextView text={data ? `${data[index].numberOfPages.toString()} pages` : ""} />
			</div>
			<div className={"buttonContainer"} style={{justifyContent: "center", gap: "40px"}}>
				<Button text={PREVIOUS_TEXT} onClickHandler={previousButtonHandler} disabled={index <= 0}/>
				<Button text={NEXT_TEXT} onClickHandler={nextButtonHandler} disabled={index >= data?.length - 1}/>
			</div>
		</div>
	)
}