import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../components/Header';
import CardItem from '../../components/CardItem';
import BannerSlider from '../../components/BannerSlider';

import { actions } from '../../store';
import style from './style';

const Main = () => {

	const dispatch = useDispatch();

	const getMovieNowPlayingAction = dispatch(actions.MovieAction.getMovieNowPlaying);
	const getTvShowPopularAction = dispatch(actions.TvShowAction.getTvShowPopular);

	const movieNowPlayingReducer = useSelector(state => state.movies.movie);
	const moviePosterReducer = useSelector(state => state.movies.movie.slice(0, 3));
	const tvshowPopularReducer = useSelector(state => state.tvshow.tvShow);

	useEffect(() => {
		getMovieNowPlayingAction();
		getTvShowPopularAction();
	}, []);

	return (
		<ScrollView style={ style.container }>
			<Header />

			<BannerSlider data={ moviePosterReducer } />
			<CardItem tag='New Release' item={ movieNowPlayingReducer } />
			<CardItem tag='TV Show' item={ tvshowPopularReducer } />

		</ScrollView>

	);
};

export default Main;