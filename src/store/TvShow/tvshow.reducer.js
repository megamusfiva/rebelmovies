const initialState = {
	tvShow: [],
	detailTvShow: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_TVSHOW_POPULAR':
			return {
				...state,
				tvShow: action.payload.results,
			};

		case 'GET_TVSHOW_DETAIL':
			return {
				...state,
				detailTvShow: action.payload.results,
			};

		default:
			return state;
	}
};