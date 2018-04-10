import React from "react";
import { Link } from "react-router-dom";
// import Geolocation from "react-geolocation";

import Header from "./Header";

const Intro = ({ user, isFetching, _location }) => {
	document.body.style.backgroundColor = "#bf203ae6";

	let link = isFetching ? (
		<h1>loading...</h1>
	) : (
		<Link to="/posts">have a go</Link>
	);

	// if (!isFetching && !_location[0])
	// 	link = (
	// 		<Geolocation
	// 			lazy
	// 			render={({ getCurrentPosition, fetchingPosition }) => (
	// 				<div>
	// 					<button onClick={getCurrentPosition}>Get Current Position</button>
	// 					<div>Fetching Position: {fetchingPosition}</div>
	// 				</div>
	// 			)}
	// 		/>
	// 	);

	return (
		<div>
			<Header />
			<h1 id="intro-text">Location based anonymous conversations</h1>
			<h4 id="description-text">
				Get a temporary username and write reach out to your neighborhood
			</h4>
			<div id="have-a-go">{link}</div>
		</div>
	);
};

export default Intro;
