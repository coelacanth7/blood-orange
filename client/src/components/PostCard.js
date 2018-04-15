import React from "react";

const PostCard = ({ post }) => {
	console.log(post);

	return <p>{post.text}</p>;
};

export default PostCard;
