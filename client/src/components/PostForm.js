import React, { Component } from "react";

import axios from "axios";

class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			textVal: ""
		};

		this.formPreventDefault = this.formPreventDefault.bind(this);
		this.onClickPreventDefault = this.onClickPreventDefault.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	formPreventDefault(e) {
		e.preventDefault();
		console.log("formPreventDefault");
	}

	onClickPreventDefault(e) {
		e.preventDefault();
		axios
			.post("/submit", { text: this.state.textVal })
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
		// this.props.requestPostsData();
	}

	handleChange(e) {
		this.setState({ textVal: e.target.value });
	}

	render() {
		return (
			<div>
				<form method="post" action="/submit" onSubmit={this.formPreventDefault}>
					<h4 id="username">{this.props.username} </h4>
					<br />
					<input
						id="input-box"
						type="text"
						name="text"
						value={this.state.textVal}
						onChange={this.handleChange}
					/>
					<input type="submit" onClick={this.onClickPreventDefault} />
				</form>
			</div>
		);
	}
}

export default PostForm;
