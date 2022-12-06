import React, { useRef, useEffect, useState, useMemo } from "react";
import ReactDOM from "react-dom";

import imgAvatar from "../OO.jpg";
import Carousel from "./Carousel";
import classes from "./Testimonials.module.css";

function Testimonials() {
	return (
		<div className={classes.carousel__container}>
			<div className={classes.title}>
				<h1>Testimonials</h1>
				<Carousel />
			</div>
		</div>
	);
}

export default Testimonials;
