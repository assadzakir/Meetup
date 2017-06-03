import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import * as meetupReducer from './reducers/meetups-reducer';
import * as createMeetupReducer from './reducers/createMeetup-reducer'
import * as loginReducer from './reducers/login_reducer'

export const rootReducer = combineReducers({
    meetupReducer: meetupReducer.fetchMeetups,
    createMeetupReducer: createMeetupReducer.createMeetup,
    form: formReducer,
    loginReducer:loginReducer.login
});

const middlewares = [
    thunk
];

if (__DEV__) { // eslint-disable-line
    middlewares.push(createLogger());
}

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    rootReducer,
    undefined,
    enhancers(applyMiddleware(...middlewares)
    ));

store.subscribe(() => {
    console.log(store.getState())

});


export default store;