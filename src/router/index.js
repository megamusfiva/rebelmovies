import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Main, PageDetail } from '../screens';
import { Navigation } from '../helpers';

const Stack = createNativeStackNavigator();

const MainRouter = () => {
	return (
		<NavigationContainer ref={ Navigation.navigationRef }>
			<Stack.Navigator
				initialRouteName='Main'
				screenOptions={ { headerShown: false } }
			>
				<Stack.Screen name="Main" component={ Main } />
				<Stack.Screen name="PageDetail" component={ PageDetail } />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainRouter;