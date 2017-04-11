import {Observable} from "rxjs";
import {ActionsObservable} from "redux-observable";
export const FETCH_MY_MEETUPS = 'FETCH_MY_MEETUPS';

import { MeetupApi } from '../../../constants/api';
const meetupApi = new MeetupApi();

export const fetchMeetups = action$ =>
    action$.ofType(FETCH_MY_MEETUPS)
        .switchMap(() => {
            return Observable.fromPromise(MeetupApi.fetchGroupMeetups())
                .map(u => {
                    console.log(u);
                    return {
                        type: `${FETCH_MY_MEETUPS}_FULFILLED`,
                        payload: u
                    }
                });
            }
        );