import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import {
	_request_get,
	_check_user_and_submit,
	getPostsSuccess,
	getSubmitSuccess
} from "../Actions";
import Posts from "../components/Posts";

class PostsContainer extends Component {
	componentDidMount() {
		let latitude, longitude;
		if (Object.keys(this.props.user).length) {
			let { latitude, longitude } = this.props.user.location;
			this.props.requestPostsData(`posts/${latitude}/${longitude}`);
		}
	}

	render() {
		const { user, isFetching, submitPost, posts } = this.props;
		return (
			<Posts
				user={user}
				isFetching={isFetching}
				posts={posts}
				submitPost={submitPost}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
		posts: state.posts,
		isFetching: state.isFetching
	};
};

const mapDispatchToProps = dispatch => {
	return {
		requestPostsData: url => {
			dispatch(_request_get(url, getPostsSuccess));
		},
		submitPost: text => {
			dispatch(_check_user_and_submit(text, "/submit", getSubmitSuccess));
		}
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
);
