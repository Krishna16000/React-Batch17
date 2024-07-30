import { legacy_createStore as createStore } from 'redux';
import { CounterReducer } from "./CounterReducer.js"
export const Store = createStore(CounterReducer)