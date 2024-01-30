import React from "react";
import "../constants/styles/textview.css"

interface TextViewProps {
	text: string
}

const TextView: React.FC<TextViewProps> = ({text}) => {
	return (
		<p>{text}</p>
	)
}

export default TextView;