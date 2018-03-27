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
		axios("/")
			.then(response => {
				console.log(response);
			})
			// .then(json => {
			// 	// console.log(JSON.stringify(json, 0, 2));
			// 	console.log(json.body);
			// 	this.setState({ Fprint: json });
			// })
			.catch(err => {
				console.error(err);
			});
	}

	render() {
		return <App {...this.state} />;
	}
}

export default AppContainer;
