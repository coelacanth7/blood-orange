import axios from "axios";
import fingerprintjs from "fingerprintjs2";

export const GETTING_REQUEST = "GET_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_REQUEST_FAILURE = "GET_REQUEST_FAILURE";

export function gettingRequest() {
	return {
		type: GETTING_REQUEST
	};
}

export function getUserSuccess(data) {
	return {
		type: GET_USER_SUCCESS,
		data
	};
}

export function getRequestFailure(error) {
	console.log(error);
	return {
		type: GET_REQUEST_FAILURE,
		error
	};
}

export function _request(url, successCallback) {
	return dispatch => {
		dispatch(gettingRequest());
		setTimeout(() => {
			new fingerprintjs().get((fprint, components) => {
				console.log(fprint);
				axios
					.post(url, { fprint })
					.then(response => dispatch(successCallback(response.data)))
					.catch(err => dispatch(getRequestFailure(err)));
			});
		}, 100);
	};
}
