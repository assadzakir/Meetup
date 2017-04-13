import { Observable} from "rxjs";
import { ActionsObservable } from "redux-observable";
import { MeetupApi } from '../../../constants/api';

export const FETCH_MY_MEETUPS = 'FETCH_MY_MEETUPS';
const meetupApi = new MeetupApi();

export const fetchMeetups = action$ =>
    action$.ofType(FETCH_MY_MEETUPS)
        .switchMap(() => {
            return Observable.fromPromise(meetupApi.fetchGroupMeetups())
                .map(u => {
                    console.log(u);
                    return {
                        type: `${FETCH_MY_MEETUPS}_FULFILLED`,
                        payload: u
                    }
                });
        }
        );