import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import TodoReducer from './reducers';
import App from './components/App';
import User from './components/user'
import {IndexRoute} from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const logger = createLogger();
const store = createStore(
  TodoReducer,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path='/' component={User} />
          <Route path='/question_page' component={App} />
        </div>
      </Router>
    </Provider>,
    document.getElementById('root')
);
