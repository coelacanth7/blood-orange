import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppContainer from "../containers/AppContainer";
import PostsContainer from "../containers/PostsContainer";

// import Header from "./Header";

class App extends Component {
	render() {
		return (
			<div>
				<Router className="App">
					<div>
						<Switch>
							<Route exact path="/" component={AppContainer} />
							<Route path="/posts" component={PostsContainer} />
							<Route render={() => <h1>Page not found</h1>} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
