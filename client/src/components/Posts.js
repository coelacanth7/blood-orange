import React from "react";
// import { Link } from "react-router-dom";

const Posts = ({ user, isFetching }) => {
	if (!Object.keys(user).length) {
		console.log("hey");
		return "go back";
	}

	if (Object.keys(user) === 0) return null;
	const list = JSON.stringify(user, 0, 2);
	console.log(list);

	return (
		<div>
			<pre>{list}</pre>
		</div>
	);
};

export default Posts;
