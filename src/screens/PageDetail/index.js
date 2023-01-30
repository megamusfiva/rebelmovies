import React, { useEffect } from 'react';
import { Text, View, Image, Dimensions, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import { useSelector, useDispatch } from 'react-redux';

import { Header, Rating } from '../../components';
import CardItem from '../../components/CardItem';

import { actions } from '../../store';

import Style from './style';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

const PageDetail = ({ route }) => {
	const { data, type } = route.params;

	var urlParam = "https://image.tmdb.org/t/p/w500";

	const dispatch = useDispatch();

	const getMovieSimilarAction = dispatch(actions.MovieAction.getMovieSimilar);
	const getMovieDetailAction = dispatch(actions.MovieAction.getDetailMovie);
	const getMovieCastAction = dispatch(actions.MovieAction.getMovieCast);

	const movieSimilarReducer = useSelector(state => state.movies.similarMovie);
	const movieDetailReducer = useSelector(state => state.movies.detailMovie);
	const movieCastReducer = useSelector(state => state.movies.cast);

	useEffect(() => {
		getMovieSimilarAction(data.id);
		getMovieDetailAction(data.id);
		getMovieCastAction(data.id);
	}, []);

	console.log("movieDetailReducer", movieDetailReducer.genres[0].name);

	const renderCardHeader = () => (
		<View style={{ height: deviceHeight / 2.5 }}>
			<View style={Style.cardHeader}>

				<Image style={[Style.backgroundCard, { width: deviceWidth }]} source={{ uri: urlParam + data.poster_path }} />

				<View style={Style.backgroundCardWraper}></View>

				<View style={Style.absoluteCardView}>
					<View style={Style.viewCard}>
						<Text style={Style.tagCard}>{movieDetailReducer.genres[0].name}</Text>
					</View>

					<View style={Style.row}>
						<Rating rating={data.vote_average} />
						<Ionicons style={Style.dotIcon} name="ios-ellipse" size={8} />
						<Text style={Style.textRelease}>Release Date : <Text>{data.release_date}</Text></Text>
					</View>

					<Text style={Style.textCard}> {type == 'New Release' || type == 'You May Like this' ? data?.title : data?.name}</Text>
				</View>

			</View>
		</View>
	);

	const renderDetail = () => (
		<View>
			<Text style={Style.textDetail}>Synopsis</Text>

			<View style={Style.viewContainer}>
				<Text style={Style.textDesc}>{data.overview}</Text>
			</View>

			<View style={Style.containerCast}>

				<Text style={Style.text}>Cast: </Text>
				<View style={Style.containerListCast}>
					{
						movieCastReducer.map(data => {
							return (
								<Text style={Style.textDesc} > {data.name},</Text>
							);
						})
					}
					< Text style={Style.iconYellow} > more</Text>
				</View>
			</View >

		</View >
	);

	const renderEpisode = () => (
		<View style={Style.row}>

			<Video
				source={{ uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}
				paused={true}
				repeat={true}
				style={Style.backgroundVideo} />

			<View style={Style.column}>
				<Text style={Style.textDetail}>Episodes</Text>

				<View style={Style.containerEp}>
					<Text style={Style.text}>1. Title Episodes</Text>
					<Text style={Style.textRelease}>2h 10m</Text>
					<Text style={Style.textDesc}>Diana Prince lives quietly among mortals in the vibrant</Text>
				</View>
			</View>

		</View>
	);

	return (
		<ScrollView style={Style.container}>

			<Header backButton={true} />

			{renderCardHeader()}

			{renderDetail()}

			<View style={Style.line}></View>

			{renderEpisode()}

			<CardItem tag='You May Like this' item={movieSimilarReducer} />
		</ScrollView>
	);
};

export default PageDetail;