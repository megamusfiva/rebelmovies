import MovieReducer from './Movies/movies.reducer';
import MovieAction from './Movies/movies.action';
import TvShowReducer from './TvShow/tvshow.reducer';
import TvShowAction from './TvShow/tvshow.action';

import { ReduxStore, asyncStore } from './config';

const actions = {
	MovieAction,
	TvShowAction
};

const reducers = {
	MovieReducer,
	TvShowReducer
};

export {
	actions,
	reducers,
	ReduxStore,
	asyncStore,
};