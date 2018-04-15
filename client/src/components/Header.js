import React from "react";

import OrangeSvg from "./OrangeSvg";

const Header = ({ username }) => {
	// change style based on page
	let bodyTag = document.getElementById("body");
	let style = window.getComputedStyle(bodyTag).backgroundColor;
	let color = style === "rgba(191, 32, 58, 0.9)" ? "#fff" : "#bf203ae6";

	return (
		<header className="App-header" style={{ color: color }}>
			<OrangeSvg />
			<h1 id="logo">blood orange</h1>
		</header>
	);
};

export default Header;
