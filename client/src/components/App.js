import React, { Component } from "react";

class App extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		let Fprint = this.props.Fprint;
		if (Object.keys(Fprint) === 0) return null;
		const list = JSON.stringify(Fprint, 0, 2);

		// Object.keys(Fprint).map((el, i) => (
		// 	<li key={i}>{el.Fprint}</li>
		// ));
		return (
			<div className="App">
				<header className="App-header">
					<h1 id="list">hey</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				{/* <ul>{list}</ul> */}
				<pre>{list}</pre>
			</div>
		);
	}
}

export default App;
