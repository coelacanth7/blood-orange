import React, { Component } from "react";
import Modal from "react-modal";

// const customStyles = {
// 	content: {
// 		top: "50%",
// 		left: "50%",
// 		right: "auto",
// 		bottom: "auto",
// 		marginRight: "-50%",
// 		transform: "translate(-50%, -50%)"
// 	}
// };

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			textVal: "",
			modalIsOpen: false
		};

		this.formPreventDefault = this.formPreventDefault.bind(this);
		this.onClickPreventDefault = this.onClickPreventDefault.bind(this);
		this.handleChange = this.handleChange.bind(this);

		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	formPreventDefault(e) {
		e.preventDefault();
		console.log("formPreventDefault");
	}

	onClickPreventDefault(e) {
		e.preventDefault();
		this.props.submitPost(this.state.textVal);
	}

	handleChange(e) {
		this.setState({ textVal: e.target.value });
	}

	openModal() {
		this.setState({ modalIsOpen: true });
	}

	afterOpenModal() {
		// references are now sync'd and can be accessed.
		this.subtitle.style.color = "#f00";
	}

	closeModal() {
		this.setState({ modalIsOpen: false });
	}

	render() {
		return (
			<div>
				<h4 id="username">{this.props.username} </h4>{" "}
				<div className="btn-container">
					<button className="open-modal-btn" onClick={this.openModal}>
						Post
					</button>
				</div>
				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					// style={customStyles}
					className="Modal"
					overlayClassName="Overlay"
				>
					<div className="form-container">
						<button className="closeModal" onClick={this.closeModal}>
							&times;
						</button>
						<h2 ref={subtitle => (this.subtitle = subtitle)}>
							{this.props.username}
						</h2>
						<form
							method="post"
							action="/submit"
							onSubmit={this.formPreventDefault}
						>
							<textarea
								className="post-text-box"
								minLength="5"
								maxLength="180"
								rows="4"
								id="input-box"
								type="text"
								name="message"
								placeholder="Remember to be nice..."
								value={this.state.textVal}
								onChange={this.handleChange}
								autoComplete="off"
							/>
							<input
								id="submit-button"
								type="submit"
								onClick={this.onClickPreventDefault}
							/>
						</form>
					</div>
				</Modal>
			</div>
		);
	}
}

export default PostForm;
