import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Item from '../Item';

import style from './style';

const CardItem = ({ tag, item }) => {
	return (
		<View>
			<View style={style.posterContainer}>

				<Text style={style.posterHeaderLeft}>{tag}</Text>

				<TouchableOpacity style={style.row}>

					<Text style={style.posterHeaderRight}>See All</Text>

					<Ionicons
						style={style.iconYellow}
						name="ios-arrow-forward-outline" size={25} />

				</TouchableOpacity>

			</View>

			<FlatList
				data={item}
				renderItem={({ item }) => <Item data={item} tag={tag} />}
				keyExtractor={item => item.id}
				horizontal={true}
				alwaysBounceHorizontal={true}
				showsHorizontalScrollIndicator={false}
				pagingEnabled={true}
			/>
		</View>);
};

export default CardItem;