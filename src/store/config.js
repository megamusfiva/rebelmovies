import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

import MovieReducer from './Movies/movies.reducer';
import TvShowReducer from './TvShow/tvshow.reducer';

const rootReducer = combineReducers({
	movies: MovieReducer,
	tvshow: TvShowReducer
});

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const asyncStore = createStore(
	persistedReducer,
	applyMiddleware(thunk)
);

const persistor = persistStore(asyncStore);

const ReduxStore = props => {
	return (
		<Provider store={ asyncStore }>
			<PersistGate loading={ null } persistor={ persistor }>
				{ props.children }
			</PersistGate>
		</Provider>
	);
};

export { ReduxStore, asyncStore };