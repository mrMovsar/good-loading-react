import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import todosReducer from './todos';
import usersReducer from './users';

const logger = createLogger({
    diff: true,
    collapsed: true
});

const rootReducer = combineReducers({
    users: usersReducer,
    todos: todosReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;