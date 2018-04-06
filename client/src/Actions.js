import axios from "axios";
import fingerprintjs from "fingerprintjs2";

export const GETTING_REQUEST = "GET_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_REQUEST_FAILURE = "GET_REQUEST_FAILURE";
export const GET_SUBMIT_SUCCESS = "GET_SUBMIT_SUCCESS";

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

export function getPostsSuccess(data) {
	return {
		type: GET_POSTS_SUCCESS,
		data
	};
}

export function getSubmitSuccess(data) {
	return {
		type: GET_SUBMIT_SUCCESS,
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

export function _request_get(url, successCallback) {
	return dispatch => {
		dispatch(gettingRequest());
		axios
			.get(url)
			.then(response => dispatch(successCallback(response.data)))
			.catch(err => dispatch(getRequestFailure(err)));
	};
}

export function _request_user(url, successCallback) {
	return dispatch => {
		dispatch(gettingRequest());
		setTimeout(() => {
			new fingerprintjs().get((fprint, components) => {
				axios
					.post(url, { fprint })
					.then(response => dispatch(successCallback(response.data)))
					.catch(err => dispatch(getRequestFailure(err)));
			});
		}, 100);
	};
}

export function _check_user_and_submit(text, url, successCallback) {
	return dispatch => {
		dispatch(gettingRequest());
		setTimeout(() => {
			new fingerprintjs().get((fprint, components) => {
				axios
					.post("/user", { fprint })
					.then(response => axios.post(url, { text, user: response.data }))
					.then(response => {
						console.log(response);
						successCallback(response.data);
					})
					.catch(err => dispatch(getRequestFailure(err)));
			});
		}, 100);
	};
}
