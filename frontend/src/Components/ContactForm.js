import React from "react";
import Input from "./Input";
import UserInput from "../hooks/user-input";

import classes from "./ContactForm.module.css";

function ContactForm() {
	const validateFunction = (value) => value.trim() !== "";
	const {
		value: message,
		hasError: messageIsValid,
		enteredValueChangeHandler: messageChangeHandler,
		blurValueChangeHandler: messageBlur,
	} = UserInput((value) => value.trim() !== "");
	const { formIsValid: validForm } = UserInput;

	const sendMessage = (e) => {
		e.preventDefault();
	};

	return (
		<section className={classes.form}>
			<h1>Contact</h1>
			<form action="" onSubmit={sendMessage}>
				<div>
					<Input type="text" placeholder="First Name" fn={validateFunction} />
					<Input type="text" placeholder="Last Name" fn={validateFunction} />
				</div>
				<div>
					<Input
						type="text"
						placeholder="Last Name"
						fn={(value) => value.trim() !== "" || value.includes("@")}
					/>
				</div>
				<div>
					<textarea
						placeholder="Type your message...."
						name="message"
						id=""
						cols="87"
						rows="10"
						onChange={messageChangeHandler}
						className={`${messageIsValid ? classes.error : ""}`}
						onBlur={messageBlur}
						value={message}
					></textarea>
				</div>
				<div>
					<button
						type="submit"
						className={`${classes.btn}  ${!validForm ? classes.disabled : ""}`}
						disabled={validForm ? "true" : "false"}
					>
						Send
					</button>
				</div>
			</form>
		</section>
	);
}

export default ContactForm;
