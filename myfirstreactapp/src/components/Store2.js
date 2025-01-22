import {createStore, applyMiddleware} from 'redux';
import {composWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(

);