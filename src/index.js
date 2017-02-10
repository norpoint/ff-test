import 'rxjs';
import './mock-endpoints';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configure-store';

import App from './containers/App'
import './css/index.css'
import './css/form.css'
import './css/menu-bar.css'


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
