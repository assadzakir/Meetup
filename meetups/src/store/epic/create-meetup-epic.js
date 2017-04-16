import { Observable} from "rxjs";
import { ActionsObservable } from "redux-observable";
import { MeetupApi } from '../../../constants/api';

const meetupApi = new MeetupApi();

export const createMeetups = action$ =>
    action$.ofType('CREATE_MEETUP')
        .switchMap((action) => {
            return Observable.fromPromise(meetupApi.createGroupMeetups(action.payload))
                .map(u => {
                    console.log(u);
                    return {
                        type: 'CREATE_MEETUP_SUCCESS',
                        payload: u
                    }
                });
        }
        );