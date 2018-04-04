import React from "react";

import OrangeSvg from "./OrangeSvg";

const Header = ({ username }) => {
	let color;
	let bodyTag = document.getElementById("body");
	let style = window.getComputedStyle(bodyTag).backgroundColor;
	console.log(style);
	if (style == "rgba(191, 32, 58, 0.9)") {
		color = "#fff";
	} else {
		color = "#bf203ae6";
	}

	return (
		<header className="App-header" style={{ color: color }}>
			<OrangeSvg />
			{/* <div id="test" /> */}
			<h1 id="logo">blood orange</h1>
			<h4 id="username">{username} </h4>
		</header>
	);
};

export default Header;
