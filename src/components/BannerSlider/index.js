import React, { useState, createRef } from 'react';
import { useWindowDimensions, Image, View, Text, TouchableOpacity, FlatList } from 'react-native';
import Genres from '../../helpers/Genres';

import style from './style';

const BannerSlider = (param) => {

	const data = param.data;
	var urlParam = "https://image.tmdb.org/t/p/w500";

	const windowWidth = useWindowDimensions().width;
	const windowheight = useWindowDimensions().height;

	const slider = createRef(null);
	const [sliderState, setSliderState] = useState({
		item: 0,
		offset: 0,
	});

	const slideChanged = e => {
		const item = Math.round(e.nativeEvent.contentOffset.x / windowWidth);

		setSliderState({
			item: item,
			offset: item * windowWidth,
		});
	};

	const renderer = ({ item, index }) => (
		<View style={ { height: windowheight / 2.5, width: windowWidth } }>
			<View style={ style.cardHeader }>

				<Image style={ [style.backgroundCard, { width: windowWidth }] } source={ { uri: urlParam + item.backdrop_path } } />

				<View style={ style.backgroundCardWraper }></View>

				<View style={ style.absoluteCardView }>
					<Text style={ style.tagCard }>{ Genres.getGenres(item.genre_ids) }</Text>
					<Text style={ style.textCard }>{ item.title }</Text>
					<TouchableOpacity style={ style.buttonCard }>
						<Text style={ { color: '#FFE922', fontSize: 16 } }>{ Genres.getGenres(item.genre_ids) }</Text>
					</TouchableOpacity>
				</View>

			</View>
		</View>
	);

	const dots = () => (
		<View style={ style.dotGroup }>
			{ data.map((_, index) => (
				<View key={ index } style={ [style.dot, sliderState.item === index ? style.dotActive : null] } />
			)) }
		</View>
	);

	return (
		<View>
			<FlatList
				data={ data }
				renderItem={ renderer }
				ref={ slider }
				keyExtractor={ (_, index) => index }
				horizontal={ true }
				pagingEnabled={ true }
				showsHorizontalScrollIndicator={ false }
				onScroll={ slideChanged }
				getItemLayout={ (_, index) => ({
					length: windowWidth,
					offset: windowWidth * index,
					index,
				}) }
			/>
			<View style={ style.controls }>
				{ dots() }
			</View>
		</View>
	);
};

export default BannerSlider;