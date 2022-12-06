/* 
The “about” section of your website should include your mission, purpose,
 and who’s on your team. The right about us or about me template can help you 
 expertly lay out your vision.
 That’s why our team gathered five templates to help you build the perfect about page. 
K*/

import React from "react";
import classes from "./About.module.css";
function About() {
	return (
		<div className={classes["about"]}>
			<div className={classes["about__hero"]}>
				<h1>About Me</h1>

				<div className={classes["about__hero--details"]}>
					<div className={classes["img_container"]}>
						<img
							src="https://avatars.githubusercontent.com/u/57766896?v=4"
							alt=""
						/>
					</div>
					<div className="inf">
						<div>
							<h1>Work Experience </h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Laudantium accusamus nesciunt voluptate, eveniet aliquam sunt
								doloremque reprehenderit dicta vero veniam sequi natus quas
								voluptas dolorem saepe? Minus, facilis? Eaque, vitae.
							</p>
						</div>
						<div>
							<h1>Education</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Excepturi, eaque libero! Commodi totam illo nobis tempora ipsam
								error minima adipisci architecto quibusdam sit, assumenda
								distinctio ex. Voluptatum neque, suscipit est possimus rem in,
								minima blanditiis sit, reiciendis non corporis explicabo et a
								quisquam modi atque accusantium quam sed aliquam? Repudiandae.
							</p>
						</div>
						<div>
							<h1>Education</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Excepturi, eaque libero! Commodi totam illo nobis tempora ipsam
								error minima adipisci architecto quibusdam sit, assumenda
								distinctio ex. Voluptatum neque, suscipit est possimus rem in,
								minima blanditiis sit, reiciendis non corporis explicabo et a
								quisquam modi atque accusantium quam sed aliquam? Repudiandae.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className={classes["yo"]}>
				<div>
					<img
						src="https://img.freepik.com/free-vector/organic-flat-about-me-concept-illustrated_23-2148890399.jpg?size=338&ext=jpg"
						alt=""
					/>
				</div>
				<div>
					<h1>Hobbies</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Consectetur non sunt vel natus esse hic quam quia facilis pariatur
						atque.
					</p>
				</div>
			</div>
			<div className={classes["divider__banner"]}>
				<div className={classes["divider"]}></div>
				<div className={classes["yo"]}>
					<div>
						<h1>Interesting Thing about me</h1>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Consectetur non sunt vel natus esse hic quam quia facilis pariatur
							atque.
						</p>
					</div>
					<div>
						<img
							src="https://img.freepik.com/free-vector/organic-flat-about-me-concept-illustrated_23-2148890399.jpg?size=338&ext=jpg"
							alt=""
						/>
					</div>
				</div>
			</div>

			<footer>
				<div className={classes["waves"]}></div>
			</footer>
		</div>
	);
}

export default About;
