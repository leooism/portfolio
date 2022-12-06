import React from "react";
import classes from "./Banner.module.css";

import { BsFillTelephoneFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import Divider from "../Ui/Divider";

function Banner() {
	return (
		<section className={classes.banner}>
			<h1>How can I help you?</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
				autem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
				totam temporibus dolore at unde quod tempore vitae libero a labore.
			</p>
			<div className={classes.banner_contact}>
				<div>
					<div className={classes.icon}>
						<BsFillTelephoneFill />
					</div>
					<div>+977 9847490008</div>
				</div>
				<Divider type="horizontal" />

				<div>
					{" "}
					<div className={classes.icon}>
						<CiLocationOn />
					</div>
					<div>New Banewshor, Kathmandu</div>
				</div>
				<Divider type="horizontal" />

				<div>
					<div className={classes.icon}>
						<CgMail />
					</div>
					<div>leooism10@gmail.com</div>
				</div>
			</div>
		</section>
	);
}

export default Banner;
