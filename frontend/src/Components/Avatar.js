import React from "react";
import ReactDOM from "react-dom";
import classes from "./Avatar.module.css";
function Avatar({ imgSrc }) {
	return (
		<div className={classes.avatar}>
			<img src={imgSrc.profile} alt="avatar" />
		</div>
	);
}

export default Avatar;
