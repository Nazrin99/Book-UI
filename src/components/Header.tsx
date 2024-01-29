import React from "react";
import "../constants/styles/header.css"

interface HeaderProps {
    text: string
}

const Header: React.FC<HeaderProps> = ({text}) => {
    return (
        <h1>{text}</h1>
    )
}

export default Header;