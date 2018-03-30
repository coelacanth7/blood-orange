import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppContainer from "../containers/AppContainer";
import Posts from "./Posts";

class App extends Component {
	render() {
		return (
			<Router className="App">
				<div>
					<header className="App-header">
						<h1 id="list">bood orange</h1>
					</header>

					<Switch>
						<Route exact path="/" component={AppContainer} />
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
