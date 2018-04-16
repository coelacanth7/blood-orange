import React from "react";

import moment from "moment";
import geolib from "geolib";

const PostCard = ({ post, user }) => {
	console.log(post);
	let distance = geolib.getDistance(
		{
			latitude: user.location.latitude,
			longitude: user.location.longitude
		},
		{
			latitude: post.location.coordinates[1],
			longitude: post.location.coordinates[0]
		}
	);

	return (
		<div className="post-box">
			<h3 className="post-username">{post.username}</h3>
			<h4 className="post-time corner-text">
				{moment(post.createdAt).fromNow()}
			</h4>
			<p className="post-text">{post.text}</p>
			<h6 className="post-distance corner-text">{distance} meters away</h6>
			<h6 className="post-comments corner-text">
				{post.comments.length} comments
			</h6>
		</div>
	);
};

export default PostCard;
