import React from "react";
import classes from "./Input.module.css";
import UserInput from "../hooks/user-input";
function Input({ fn, type, placeholder }) {
	const {
		value: valueName,
		hasError: valueIsValid,
		enteredValueChangeHandler: valueChangeHandler,
		blurValueChangeHandler: valueBlur,
	} = UserInput(fn);

	return (
		<div className={classes.input_container}>
			<input
				type={type}
				placeholder={placeholder}
				className={`${valueIsValid ? classes.error : ""}`}
				onBlur={valueBlur}
				onChange={valueChangeHandler}
				value={valueName}
			/>
			{valueIsValid && (
				<p className={classes.error_text}>Please Fill out this form</p>
			)}
		</div>
	);
}

export default Input;
