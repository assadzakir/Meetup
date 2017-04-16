// FETCHING MEETUP ACTIONS
export const FETCH_MY_MEETUPS = 'FETCH_MY_MEETUPS';


// CREATE MEETUP ACTIONS
export const CREATE_MEETUP = 'CREATE_MEETUP';
export const CREATE_MEETUP_SUCCESS = 'CREATE_MEETUP_SUCCESS';
export const CREATE_MEETUP_ERROR = 'CREATE_MEETUP_ERROR';

export const fetchMyMeetups = () => ({
  type: FETCH_MY_MEETUPS,
});

export const createMeetup = (meetup) => ({
  type: CREATE_MEETUP,
  payload:meetup
});
