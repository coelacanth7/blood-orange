import React, { Component } from "react";
import axios from "axios";
import fingerprintjs from "fingerprintjs2";

import App from "../components/App";

class AppContainer extends Component {
	constructor() {
		super();
		this.state = { Fprint: "", isFetching: false, error: null };
	}

	componentDidMount() {
		new fingerprintjs().get((fprint, components) => {
			console.log(fprint);
			console.log(document.cookie);
			console.log(window.sessionStorage);
			console.log(window.localStorage);

			axios
				.post("/user", { fprint })
				.then(response => this.setState({ Fprint: response.data }))
				.catch(err => console.error(err));
		});
	}

	render() {
		return <App {...this.state} />;
	}
}

export default AppContainer;
