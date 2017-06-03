import { MeetupApi } from '../../../constants/api';

const meetupApi = new MeetupApi();

export const CREATE_MEETUP = 'CREATE_MEETUP';
export const CREATE_MEETUP_SUCCESS = 'CREATE_MEETUP_SUCCESS';
export const CREATE_MEETUP_ERROR = 'CREATE_MEETUP_ERROR';

export const FETCH_MY_MEETUPS = 'FETCH_MY_MEETUPS';

export const fetchMyMeetups = () => ({
  type: FETCH_MY_MEETUPS,
  payload: meetupApi.fetchGroupMeetups(),
});

export const createMeetup = args => async dispatch => {
  dispatch({ type: CREATE_MEETUP });
  try {
    await meetupApi.createGroupMeetups(args);
    dispatch({ type: CREATE_MEETUP_SUCCESS });
  } catch (e) {
    return dispatch({ type: CREATE_MEETUP_ERROR });
  }
  return await dispatch(fetchMyMeetups());
};