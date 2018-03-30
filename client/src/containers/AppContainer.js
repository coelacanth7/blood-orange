import React, { Component } from "react";
import { connect } from "react-redux";

import { _request, getUserSuccess } from "../Actions";
import Intro from "../components/Intro";

class AppContainer extends Component {
	componentDidMount() {
		this.props.requestUserData();
	}

	render() {
		const { user, isFetching } = this.props;
		return <Intro user={user} isFetching={isFetching} />;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.user,
		isFetching: state.isFetching,
		id: ownProps.match.params.id
	};
};

const mapDispatchToProps = dispatch => {
	return {
		requestUserData: () => {
			dispatch(_request(`/user`, getUserSuccess));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
