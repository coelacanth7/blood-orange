import React from "react";
import { Link } from "react-router-dom";

const Intro = ({ displayIntro, onClickGoButton }) => {
	return (
		<div>
			<h1 id="intro-text">Location based anonymous conversations</h1>
			<h4 id="description-text">
				Get a temporary username and writes some trash
			</h4>
			<div id="have-a-go" onClick={onClickGoButton}>
				<Link to="/posts">have a go</Link>
			</div>
		</div>
	);
};

export default Intro;
