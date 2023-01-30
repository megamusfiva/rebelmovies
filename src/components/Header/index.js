import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Navigation } from '../../helpers';

import Style from './style';

const Header = (props) => {
	const ButtonNav = () => {
		if (props.backButton) {
			return (<TouchableOpacity
				style={ Style.leftButtonHeader }
				onPress={ () => { Navigation.pop(); } }>
				<Ionicons name="arrow-back" size={ 25 } color='#FFF' />
			</TouchableOpacity>);
		} else {
			return (<TouchableOpacity style={ Style.leftButtonHeader } onPress={ null }>
				<Image source={ require('../../assets/logo.png') } />
			</TouchableOpacity>);
		}
	};

	return (
		<View style={ Style.header }>
			<ButtonNav />
		</View>
	);
};

export default Header;