import React from "react";
// import { Link } from "react-router-dom";

import Header from "./Header";

const Posts = ({ user, isFetching }) => {
	if (!Object.keys(user).length) {
		console.log("hey");
		return "go back";
	}

	if (Object.keys(user) === 0) return null;
	const list = JSON.stringify(user, 0, 2);
	console.log(list);

	document.body.style.backgroundColor = "#fff";

	let username = user.user.username;
	console.log(user.Location);

	return (
		<div>
			<Header username={username} />
			<hr />
			<div>
				<form>
					<input name="title" />
					<input name="text" />
				</form>
			</div>
			<pre>{list}</pre>
		</div>
	);
};

export default Posts;
