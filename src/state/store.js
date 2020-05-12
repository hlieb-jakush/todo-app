import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { todosReducer } from "./reducer";

let store = createStore(todosReducer, applyMiddleware(thunk));
window.store = store;

export default store;