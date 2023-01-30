export default {
	getMovieNowPlaying: dispatch => async () => {
		var apiKey = "57dd8dce58d9a17c2c5b689da400f505";
		var url = "https://api.themoviedb.org/3/movie/now_playing";
		const apiFetch = await fetch(url + "?api_key=" + apiKey, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
			},
		});

		const result = await apiFetch.json();

		if (apiFetch.ok) {
			dispatch({
				type: 'GET_MOVIE_NOW_PLAYING',
				payload: result,
			});
		} else {
			console.log('[Error Get Movie Now Playing]: ', result?.status_message);
		}
	},

	getDetailMovie: dispatch => async id => {
		var apiKey = "57dd8dce58d9a17c2c5b689da400f505";
		var url = "https://api.themoviedb.org/3/movie/" + id;
		const apiFetch = await fetch(url + "?api_key=" + apiKey, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
			},
		});

		const result = await apiFetch.json();
		if (apiFetch.ok) {
			dispatch({
				type: 'GET_MOVIE_DETAIL',
				payload: result,
			});
		} else {
			console.log('[Error Get Movie Detail]: ', result?.status_message);
		}
	},

	getMovieSimilar: dispatch => async id => {
		var apiKey = "57dd8dce58d9a17c2c5b689da400f505";
		var url = "https://api.themoviedb.org/3/movie/" + id + "/similar";
		const apiFetch = await fetch(url + "?api_key=" + apiKey, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
			},
		});

		const result = await apiFetch.json();

		if (apiFetch.ok) {
			dispatch({
				type: 'GET_MOVIE_SIMILAR',
				payload: result,
			});
		} else {
			console.log('[Error Get Movie Similar]: ', result?.status_message);
		}
	},

	getMovieCast: dispatch => async id => {
		var apiKey = "57dd8dce58d9a17c2c5b689da400f505";
		var url = "https://api.themoviedb.org/3/movie/" + id + "/credits";
		const apiFetch = await fetch(url + "?api_key=" + apiKey, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
			},
		});

		const result = await apiFetch.json();
		if (apiFetch.ok) {
			let data = [];
			for (let i = 0; i < 3; i++) {
				data.push(result.cast[i]);
			}
			dispatch({
				type: 'GET_MOVIE_CAST',
				payload: data
			});
		} else {
			console.log('[Error Get Movie Cast]: ', result?.status_message);
		}
	},
};