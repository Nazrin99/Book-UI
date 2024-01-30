import "../constants/styles/button.css"
import {MouseEventHandler} from "react";
import React from "react";

interface ButtonProps {
    text: string;
    disabled?: boolean;
    onClickHandler: MouseEventHandler
}

const Button: React.FC<ButtonProps> = ({text, disabled, onClickHandler}) => {
    return (
        <button onClick={onClickHandler} disabled={disabled}>{text}</button>
    )
}

export default Button;