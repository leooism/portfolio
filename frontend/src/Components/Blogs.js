import React from "react";
import BlogCard from "./BlogCard";
import classes from "./Blogs.module.css";
import Carousel from "./Carousel";
function Blogs() {
	return (
		<div className={classes.blogs_container}>
			{/* <Carousel /> */}
			<section className={classes.blogs}>
				<div
					className={`${classes["column"]} ${classes.flex} ${classes["g-2"]} ${classes["f-column"]}`}
				>
					<h1>Subscribe</h1>
					<p>Join us to get new exciting blogs on your favourite topic</p>
					<form className={classes.subscribe}>
						<div>
							<input type="text" placeholder="Your Email" />
						</div>
						<div>
							<button>Subscribe</button>
						</div>
					</form>
				</div>
				<div className={`${classes["column"]} ${classes["column_blog"]}`}>
					{[1, 2, 3, 4, 5].map((el) => (
						<BlogCard />
					))}{" "}
				</div>
				<div className={classes["column"]}></div>
			</section>
		</div>
	);
}

export default Blogs;
