import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import * as meetupEpics from './epic/meetups-epic';
import * as createMeetupEpics from './epic/create-meetup-epic';
import * as meetupReducer from './reducers/meetups-reducer';
import * as createMeetupReducer from './reducers/createMeetup-reducer'
import * as loginReducer from './reducers/login_reducer'

export const rootReducer = combineReducers({
    meetupReducer: meetupReducer.fetchMeetups,
    createMeetupReducer: createMeetupReducer.createMeetup,
    form: formReducer,
    loginReducer:loginReducer.login
});

const rootEpic = combineEpics(
    meetupEpics.fetchMeetups,
    createMeetupEpics.createMeetups
);

const epicMiddleware = createEpicMiddleware(rootEpic);

const middlewares = [
    epicMiddleware
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