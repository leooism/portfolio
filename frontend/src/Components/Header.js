import React from "react";
import classes from "./Header.module.css";

function Header() {
	return (
		<header className={classes.header}>
			<div>Logo</div>
			<nav>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Blogs</li>
					<li>Projects</li>
				</ul>
			</nav>
			<div className={classes.contact_container}>
				<button className={`${classes.btn} ${classes["btn-contact"]}`}>
					Contact Us
				</button>
			</div>
		</header>
	);
}

export default Header;
