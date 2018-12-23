import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createHashHistory';
import thunk from "redux-thunk";

import reducer from './reducers';
import './assets/styles/styles.scss';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

const history = createHistory();
const middlewares = [thunk]
const store = createStore(reducer(history), compose(applyMiddleware(routerMiddleware(history), ...middlewares)))

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
