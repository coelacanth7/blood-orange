import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { _request_get, getPostsSuccess } from "../Actions";
import Posts from "../components/Posts";

class PostsContainer extends Component {
	componentDidMount() {
		this.props.requestPostsData();
	}

	render() {
		const { user, isFetching, num } = this.props;
		return <Posts user={user} num={num} isFetching={isFetching} />;
	}
}

const mapStateToProps = state => {
	return {
		num: state.num,
		user: state.user,
		isFetching: state.isFetching
	};
};

const mapDispatchToProps = dispatch => {
	return {
		requestPostsData: () => {
			dispatch(_request_get(`/posts`, getPostsSuccess));
		}
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
);
