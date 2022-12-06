import React from "react";
import classes from "./Divider.module.css";
function Divider({ type }) {
	return <div className={`${classes.divider} ${type}`}></div>;
}

export default Divider;
