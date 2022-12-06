import React from "react";
import classes from "./Contact.module.css";

import Banner from "./Banner";
import ContactForm from "./ContactForm";

function Contact() {
	return (
		<div className={classes.contact}>
			<Banner />
			<ContactForm />
			<div className={classes["shape-outer circle"]}>
				<div className={classes["shape-inner circle"]}></div>
			</div>
		</div>
	);
}

export default Contact;
