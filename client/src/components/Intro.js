import React from "react";

const Intro = ({ displayIntro, onClickGoButton }) => {
	if (!displayIntro) return null;

	return (
		<div>
			<h1 className="intro-text">Location based anonymous messaging</h1>
			<h4>Get a temporary username and shitpost away</h4>
			<button onClick={onClickGoButton}>Have a go</button>
		</div>
	);
};

export default Intro;
