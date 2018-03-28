import React, { Component } from "react";
import axios from "axios";
import fingerprintjs from "fingerprintjs";

import App from "../components/App";

class AppContainer extends Component {
	constructor() {
		super();
		this.state = { Fprint: "", isFetching: false, error: null };
	}

	componentDidMount() {
		const fprint = new fingerprintjs({ canvas: true }).get();
		console.log(fprint);
		axios
			.post("/user", { fprint })
			.then(response => this.setState({ Fprint: response.data }))
			.catch(err => console.error(err));
	}

	render() {
		return <App {...this.state} />;
	}
}

export default AppContainer;
