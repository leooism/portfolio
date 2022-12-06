import { useState } from "react";
function UserInput(validate = () => {}) {
	const [enteredValue, setEnteredValue] = useState("");
	const [isTouched, setIsTouched] = useState(false);
	const enteredValueChangeHandler = (e) => {
		setEnteredValue(e.target.value);
	};
	const blurValueChangeHandler = (e) => {
		setIsTouched(true);
	};
	const hasError = isTouched && !validate(enteredValue);
	const reset = () => {
		setEnteredValue("");
		setIsTouched(false);
	};
	const formIsValid = hasError;
	return {
		value: enteredValue,
		hasError,
		reset,
		formIsValid,
		enteredValueChangeHandler,
		blurValueChangeHandler,
	};
}

export default UserInput;
