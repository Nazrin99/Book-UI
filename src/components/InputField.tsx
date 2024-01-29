import React from "react";
import "../constants/styles/inputField.css"

interface InputFieldProps {
    hint: string
}

const InputField: React.FC<InputFieldProps> = ({hint}) => {
    return (
        <input className={"inputField"} type={"text"} name={hint} placeholder={hint} />
    )
}

export default InputField;