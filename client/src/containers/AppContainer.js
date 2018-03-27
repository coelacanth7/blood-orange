import React, { Component } from "react";
import axios from "axios";
import App from "../components/App";

class AppContainer extends Component {
	constructor() {
		super();
		this.state = {
			Fprint: "",
			isFetching: false,
			error: null
		};
	}

	componentDidMount() {
		axios
			.get("/api")
			.then(response => {
				console.log(response.data);
				this.setState({ Fprint: response.data });
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
