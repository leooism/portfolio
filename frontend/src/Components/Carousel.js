import React, { useState, useEffect } from "react";
import classes from "./Carousel.module.css";

import { GrPrevious, GrNext } from "react-icons/gr";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import Avatar from "./Avatar";
import Card from "../Ui/Card";
function Carousel(props) {
	const [currentSlide, setCurrentSlide] = useState(0);

	const [carousel, setCarousel] = useState([
		{
			id: 0,
			name: "Bidhan Bhandari",
			profile:
				"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltee41eef7e0a0e3f3/626b8172918f4e4e59121e78/GettyImages-1240053215.jpg",
			portfolio: "CEO of Tesla",
			ratings: 4.5,
			testimonial: `Having good restaurant reviews is crucial these days. It is not
			 just making our decision to pick one easier, it is also helping the restaurant be
			  more successful. You can quickly copy and paste these good restaurant review examples, 
			  publish them on Facebook, Yelp or other rating platform and help the restaurant get 
				higher ratings and more customers`,
			socialMediaLinks: [
				{
					title: "facebook",
					link: "www.facebook.com/bishalbhandari",
				},
			],
		},
		{
			id: 1,
			name: "Bishal Bhandari",
			profile: "imgAvatar",
			portfolio: "CEO of Tesla",
			ratings: 4.5,
			testimonial: `Having good restaurant reviews is crucial these days. It is not
			 just making our decision to pick one easier, it is also helping the restaurant be
			  more successful. You can quickly copy and paste these good restaurant review examples, 
			  publish them on Facebook, Yelp or other rating platform and help the restaurant get 
				higher ratings and more customers`,
			socialMediaLinks: [
				{
					title: "facebook",
					link: "www.facebook.com/bishalbhandari",
				},
			],
		},
	]);
	const nextSlideHandler = () => {
		if (currentSlide >= carousel.length - 1) return setCurrentSlide(0);
		setCurrentSlide((prevSlide) => prevSlide + 1);
	};
	const previousSlideHandler = () => {
		if (currentSlide <= 0) return setCurrentSlide(carousel.length - 1);
		setCurrentSlide((prevSlide) => prevSlide - 1);
	};
	useEffect(() => {
		const slideDOM = document.querySelectorAll("#slide");
		slideDOM.forEach(function (slide, i) {
			slide.style.transform = `translateX(${i * 100}%)`; //Sets inital transformed position
		});
	}, []);
	useEffect(() => {
		const slideDOM = document.querySelectorAll("#slide");
		slideDOM.forEach(function (slide, i) {
			slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
		});
	}, [currentSlide]);

	const changeSlideOnDot = (e) => {
		setCurrentSlide(e.target.dataset.slide);
	};
	return (
		<>
			<Card classId="w-500 relative h-250">
				<Avatar imgSrc={carousel.find((slide) => slide.id === currentSlide)} />
				<div className={classes.slides}>
					{carousel.map((slide) => (
						<div className={`${classes.slide}`} id="slide" key={slide.id}>
							<div className={classes.slide_profile}>
								<span className={classes["slide_profile--name"]}>
									{slide.name} ${slide.id}
								</span>
								<span className={classes["slide_profile--portfolio"]}>
									{slide.portfolio}{" "}
								</span>
							</div>
							<div className={classes.slide_testimonial}>
								<blockquote>{slide.testimonial}</blockquote>
							</div>
							<div className={classes.slide_social}>
								<BsTwitter />
								<BsFacebook />
							</div>
						</div>
					))}
				</div>
				<div className={classes.carousel_buttons}>
					<div className={classes["carousel_button--prev"]}>
						<button
							className={classes.carousel_btn}
							onClick={previousSlideHandler}
							id="prev"
						>
							<GrPrevious />
						</button>
					</div>
					<div className={classes["carousel_button--next"]}>
						<button
							className={classes.carousel_btn}
							id="next"
							onClick={nextSlideHandler}
						>
							<GrNext />
						</button>
					</div>
				</div>
			</Card>
			<div className={classes.dots}>
				{carousel.map((slide) => {
					return (
						<button
							key={slide.id}
							data-slide={slide.id}
							className={`${classes.dot}`}
							id="dot"
							onClick={changeSlideOnDot}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Carousel;
