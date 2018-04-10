import React from "react";
// import { Link } from "react-router-dom";

import Header from "./Header";
import PostForm from "./PostForm";

const Posts = ({ user, isFetching, submitPost }) => {
	if (!Object.keys(user).length) {
		console.log("hey");
		return "go back";
	}

	if (Object.keys(user) === 0) return null;
	const list = JSON.stringify(user, 0, 2);

	document.body.style.backgroundColor = "#fff";

	return (
		<div>
			<Header />
			<PostForm username={user.user.username} submitPost={submitPost} />
			<h4>Posts near {user.location.region_name}</h4>
			<pre>{list}</pre>
		</div>
	);
};

export default Posts;
