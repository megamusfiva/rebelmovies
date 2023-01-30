import React from 'react';

import MainRouter from './src/router';
import { ReduxStore } from './src/store';

const App = () => {
	return (
		<ReduxStore>
			<MainRouter />
		</ReduxStore>
	);
};


export default App;