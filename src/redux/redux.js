import { combineReducers, applyMiddleware, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import MoneyConversion from './reducer/MoneyConversion';

let reducers = combineReducers({
    MoneyConversionReducer: MoneyConversion
});

let store = legacy_createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;