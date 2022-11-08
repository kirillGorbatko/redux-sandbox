import React from 'react';
import { createStore } from 'redux'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app';
import reducer from './reducer';
import './index.css'

const $root = createRoot(document.getElementById('root'));
const store = createStore(reducer);

$root.render(
	<Provider store={store}>
		<App/>
	</Provider>
);
