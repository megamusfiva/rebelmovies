export default {
	getTvShowPopular: dispatch => async () => {
		var apiKey = "57dd8dce58d9a17c2c5b689da400f505";
		var url = "https://api.themoviedb.org/3/tv/popular";
		const apiFetch = await fetch(url + "?api_key=" + apiKey, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
			},
		});

		const result = await apiFetch.json();

		if (apiFetch.ok) {
			dispatch({
				type: 'GET_TVSHOW_POPULAR',
				payload: result,
			});
		} else {
			console.log('[Error Get Tv Show Popular]: ', result?.status_message);
		}
	},

	getTvShowDetail: dispatch => async id => {
		var apiKey = "57dd8dce58d9a17c2c5b689da400f505";
		var url = "https://api.themoviedb.org/3/tv/" + id;
		const apiFetch = await fetch(url + "?api_key=" + apiKey, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
			},
		});

		const result = await apiFetch.json();

		if (apiFetch.ok) {
			dispatch({
				type: 'GET_TVSHOW_DETAIL',
				payload: result,
			});
		} else {
			console.log('[Error Get Detail Tv Show]: ', result?.status_message);
		}
	},
};