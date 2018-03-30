import React, { Component } from "react";
import axios from "axios";
import fingerprintjs from "fingerprintjs2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Intro from "./Intro";
import Posts from "./Posts";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayIntro: true,
			fprint: {},
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
						this.setState({ fprint: response.data, displayIntro: false })
					)
					.catch(err => console.error(err));
			});
			this.setState({});
		}, 100);
	}

	render() {
		return (
			<Router className="App">
				<div>
					<header className="App-header">
						<h1 id="list">bood orange</h1>
					</header>
					<Switch>
						<Route exact path="/" component={Intro} />
						<Route exact path="/posts" component={Posts} />
						<Route render={() => <h1>Page not found</h1>} />
					</Switch>

					{/* <Intro {...this.state} onClickGoButton={this.onClickGoButton} />
					<Posts fprint={this.state.fprint} /> */}
				</div>
			</Router>
		);
	}
}

export default App;
