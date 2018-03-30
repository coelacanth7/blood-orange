import React from "react";
import { Link } from "react-router-dom";

const Intro = ({ user }) => {
	if (Object.keys(user) === 0) return null;
	const list = JSON.stringify(user, 0, 2);

	return (
		<div>
			<pre>{list}</pre>
			<h1 id="intro-text">Location based anonymous conversations</h1>
			<h4 id="description-text">
				Get a temporary username and writes some trash
			</h4>
			<div id="have-a-go">
				<Link to="/posts">have a go</Link>
			</div>
		</div>
	);
};

export default Intro;
