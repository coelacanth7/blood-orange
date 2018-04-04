import React from "react";
// import { Link } from "react-router-dom";

import Header from "./Header";
import PostForm from "./PostForm";

const Posts = ({ user, isFetching, requestPostsData }) => {
	if (!Object.keys(user).length) {
		console.log("hey");
		return "go back";
	}

	if (Object.keys(user) === 0) return null;
	const list = JSON.stringify(user, 0, 2);

	document.body.style.backgroundColor = "#fff";

	let username = user.user.username;

	return (
		<div>
			<Header />
			<hr />
			<PostForm username={username} requestPostsData={requestPostsData} />
			<pre>{list}</pre>
		</div>
	);
};

export default Posts;
