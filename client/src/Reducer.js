import {
	GETTING_REQUEST,
	GET_USER_SUCCESS,
	GET_REQUEST_FAILURE,
	GET_POSTS_SUCCESS,
	GET_SUBMIT_SUCCESS
} from "./Actions";

const initialState = {
	user: {},
	isFetching: false,
	error: null
};

export function Reducer(state = initialState, action) {
	switch (action.type) {
		case GETTING_REQUEST:
			return {
				...state,
				isFetching: true,
				error: null
			};
		case GET_USER_SUCCESS:
			return {
				...state,
				user: action.data,
				isFetching: false
			};
		case GET_POSTS_SUCCESS:
			return {
				...state,
				isFetching: false
			};
		case GET_SUBMIT_SUCCESS:
			return {
				...state,
				isFetching: false
			};
		case GET_REQUEST_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			return state;
	}
}
