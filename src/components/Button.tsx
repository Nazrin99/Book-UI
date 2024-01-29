import "../constants/styles/button.css"
import {MouseEventHandler} from "react";
import React from "react";

interface ButtonProps {
    text: string;
    onClickHandler: MouseEventHandler
}

const Button: React.FC<ButtonProps> = ({text, onClickHandler}) => {
    return (
        <button onClick={onClickHandler}>{text}</button>
    )
}

export default Button;