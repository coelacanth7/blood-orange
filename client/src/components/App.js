import React, { Component } from "react";
import axios from "axios";
import fingerprintjs from "fingerprintjs2";

import Intro from "./Intro";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayIntro: true,
			Fprint: "",
			isFetching: false,
			error: null
		};

		this.onClickGoButton = this.onClickGoButton.bind(this);
	}

	onClickGoButton() {
		setTimeout(() => {
			new fingerprintjs().get((fprint, components) => {
				console.log(fprint);

				axios
					.post("/user", { fprint })
					.then(response =>
						this.setState({ Fprint: response.data, displayIntro: false })
					)
					.catch(err => console.error(err));
			});
			this.setState({});
		}, 100);
	}

	render() {
		let Fprint = this.state.Fprint;
		if (Object.keys(Fprint) === 0) return null;
		const list = JSON.stringify(Fprint, 0, 2);

		return (
			<div className="App">
				<header className="App-header">
					<h1 id="list">hey</h1>
				</header>
				<Intro {...this.state} onClickGoButton={this.onClickGoButton} />
				<pre>{list}</pre>
			</div>
		);
	}
}

export default App;
