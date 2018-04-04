import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

const Intro = () => {
	document.body.style.backgroundColor = "#bf203ae6";

	return (
		<div>
			<Header />
			<h1 id="intro-text">Location based anonymous conversations</h1>
			<h4 id="description-text">
				Get a temporary username and write reach out to your neighborhood
			</h4>
			<div id="have-a-go" />
			<Link to="/posts">have a go</Link>
		</div>
	);
};

export default Intro;
