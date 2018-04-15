import React from "react";
import { Redirect } from "react-router-dom";

import Header from "./Header";
import PostForm from "./PostForm";
import PostCard from "./PostCard";

const Posts = ({ user, isFetching, posts, submitPost }) => {
	if (!Object.keys(user).length) {
		console.log("no username");
		return <Redirect to="/" />;
	}

	if (Object.keys(user) === 0) return null;
	const list = JSON.stringify(user, 0, 2);

	document.body.style.backgroundColor = "#fff";

	let postList;
	if (posts.length) {
		postList = posts.map(post => (
			<PostCard post={post} user={user} key={post._id} />
		));
	}

	return (
		<div>
			<Header />
			<PostForm username={user.user.username} submitPost={submitPost} />
			<h4>Posts near {user.location.region_name}</h4>
			{postList}
			{/* <pre>{list}</pre> */}
		</div>
	);
};

export default Posts;
