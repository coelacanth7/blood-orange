import React from "react";
// import { Link } from "react-router-dom";

const Posts = ({ displayIntro, fprint }) => {
	if (Object.keys(fprint) === 0) return null;
	const list = JSON.stringify(fprint, 0, 2);

	return (
		<div>
			<pre>{list}</pre>
		</div>
	);
};

export default Posts;
