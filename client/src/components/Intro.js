import React from "react";

const Intro = ({ displayIntro, onClickGoButton }) => {
	if (!displayIntro) return null;

	return (
		<div>
			<h1 id="intro-text">Location based anonymous shitposting</h1>
			<h4 id="description-text">Get a temporary username and shitpost away</h4>
			<div id="have-a-go" onClick={onClickGoButton}>
				have a go
			</div>
		</div>
	);
};

export default Intro;
