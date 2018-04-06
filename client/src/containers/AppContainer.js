import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { _request_user, getUserSuccess } from "../Actions";
import Intro from "../components/Intro";

class AppContainer extends Component {
	componentDidMount() {
		this.props.requestUserData();
	}

	render() {
		const { user, isFetching, _location } = this.props;
		return <Intro user={user} isFetching={isFetching} _location={_location} />;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.user,
		_location: state.location,
		isFetching: state.isFetching
	};
};

const mapDispatchToProps = dispatch => {
	return {
		requestUserData: () => {
			dispatch(_request_user(`/user`, getUserSuccess));
		}
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(AppContainer)
);
