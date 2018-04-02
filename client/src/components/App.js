import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppContainer from "../containers/AppContainer";
import PostsContainer from "../containers/PostsContainer";

class App extends Component {
	render() {
		return (
			<div>
				<header className="App-header">
					<h1 id="list">blood orange</h1>
				</header>
				<Router className="App">
					<Switch>
						<Route exact path="/" component={AppContainer} />
						<Route path="/posts" component={PostsContainer} />
						<Route render={() => <h1>Page not found</h1>} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
