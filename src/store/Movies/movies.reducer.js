const initialState = {
	movie: [],
	detailMovie: [],
	similarMovie: [],
	cast: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_MOVIE_NOW_PLAYING':
			return {
				...state,
				movie: action.payload.results,
			};

		case 'GET_MOVIE_DETAIL':
			return {
				...state,
				detailMovie: action.payload,
			};

		case 'GET_MOVIE_SIMILAR':
			return {
				...state,
				similarMovie: action.payload.results,
			};

		case 'GET_MOVIE_CAST':
			return {
				...state,
				cast: action.payload,
			};

		default:
			return state;
	}

};