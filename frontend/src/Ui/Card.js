import React from "react";
import classes from "./Card.module.css";
function Card(props) {
	const cardClassName = props.classId
		.split(" ")
		.map((id) => `${classes[id]}`)
		.join(" ");
	return (
		<div className={`${classes.card} ${cardClassName}`}>{props.children}</div>
	);
}

export default Card;
