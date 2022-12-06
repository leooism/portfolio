import React from "react";
import classes from "./Hero.module.css";
import profile from "../OO.jpg";
function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.hero_description}>
				<div>
					<span className={classes["hero_description--title"]}>
						Hi
						<br />I am Bidhan Bhandari
					</span>
					<br />
					<span className={classes["hero_description--info"]}>
						Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur
						adipisicing elit. Iure, pariatur.
					</span>
				</div>
				<div className={classes["hero_description--hireme"]}>
					<div className={classes["hireme"]}>
						<button className={`${classes.btn} ${classes["hireme-btn"]}`}>
							Hire Me
						</button>
					</div>
					<div className={classes["profiles"]}>
						<p>Facebook</p>
					</div>
				</div>
			</div>

			<div className={classes.hero_image}>
				<img src={profile} className={classes.img} alt="This is profile" />
			</div>
		</section>
	);
}

export default Hero;
