import React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Rating = (props) => {
	let rating = typeof props != 'undefined' ? props.rating : 0;
	let ratingNew = rating / 2;
	let ratingDecimal = parseFloat(ratingNew);
	let round = Math.round(ratingDecimal);
	const items = () => {
		const data = [];
		for (let i = 1; i <= 5; i++) {
			if (i <= round) {
				data.push(
					<Ionicons key={ i } color='#FFF' name="ios-star" size={ 15 } />
				);
			} else {
				data.push(
					<Ionicons key={ i } color='#FFF' name="ios-star-outline" size={ 15 } />
				);
			}
		}
		return data;
	};
	return <View style={ { flexDirection: 'row' } }>{ items() }</View>;
};
export default Rating;