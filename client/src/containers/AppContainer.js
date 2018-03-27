import React, { Component } from "react";
import App from "../components/App";

class AppContainer extends Component {
	constructor() {
		super();
		this.state = {
			Fprint: {},
			isFetching: false,
			error: null
		};
	}

	componentDidMount() {
		fetch("/")
			.then(response => {
				if (response.status >= 400) {
					throw new Error("Bad response from server");
				}
				return response;
			})
			.then(json => {
				console.log(JSON.stringify(json, 0, 2));
				console.log(json);
				this.setState({ Fprint: json });
			})
			.catch(err => {
				console.error(err);
			});
	}

	render() {
		return <App {...this.state} />;
	}
}

export default AppContainer;
