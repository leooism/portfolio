import React from "react";
import Card from "../Ui/Card";
import classes from "./BlogCard.module.css";
function BlogCard() {
	return (
		<Card classId="blog">
			<div className={classes["blog__title"]}>
				<div className={classes["image"]}></div>
				<div className={classes["name"]}>Bidhan Bhandari</div>
			</div>
			<div className={classes["blog__body"]}>
				<div className={classes["blog__left"]}>
					<div className={classes["blog__summary"]}>
						<div className={classes["blog__summary--heading"]}>
							<h2>Elon Musk; His full life exposed</h2>
						</div>
						<div className={classes["blog__summary--text"]}>
							Elon Musk is very beautiful Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Debitis quae voluptas, em
						</div>
					</div>
					<div className={classes["blog__date"]}>
						<div className={classes["blog__date--month"]}>
							<span className={classes["month"]}>May</span>
							<span className={classes["day"]}>25</span>
						</div>
						<div className={classes["blog__date--readTime"]}>10 Min read</div>
						<div className={classes["blog__date--bookmarks"]}>
							<button>Add to book marks</button>
						</div>
					</div>
				</div>
				<div className={classes["blog__right"]}>
					<h2>Hi I am right</h2>
				</div>
			</div>
		</Card>
	);
}

export default BlogCard;
