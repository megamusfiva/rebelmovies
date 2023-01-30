import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Navigation, Genres } from '../../helpers';

import Rating from '../Rating';

import style from './style';

const Item = ({ data, tag }) => {
	var urlParam = "https://image.tmdb.org/t/p/w500";

	return (
		<TouchableOpacity style={ style.posterList }
			onPress={ () => Navigation.push('PageDetail', { data: data, type: tag }) }>

			<Image style={ style.posterImage } source={ { uri: urlParam + data.poster_path } } resizeMethod={ 'resize' } resizeMode={ 'cover' } />

			<View style={ style.absolutePosterView }>

				<Text style={ style.posterTagCard }>{ Genres.getGenres(data.genre_ids) }</Text>

				<Rating rating={ data?.vote_average } />

				<Text style={ style.posterTitle }> { tag == 'New Release' || tag == 'You May Like this' ? data?.title : data?.name }</Text>

			</View>
		</TouchableOpacity>
	);
};

export default Item;