import axios from 'axios';
import {store} from '../src/store'
axios.defaults.baseURL = 'https://api-meetups.herokuapp.com/api';
const fakeGroupId = '58ea7cdcf1564e00118e2ea7'

class MeetupApi {
    constructor(props) {
        this.groupId = fakeGroupId;
        this.path = `/groups/${this.groupId}/meetups`;
    }
    async fetchGroupMeetups() {
        try {
            const { data } = await axios.get(this.path);
            return data.meetups;
        } catch (e) {
            alert(e);
            //   store.dispatch({
            //    type:"FETCH_MY_MEETUPS_REJECTED"
            // })
        }
    }
    async createGroupMeetups(args) {
        try {
            const res = await axios.post(`${this.path}/new`, { ...args });
            alert('Sucessfully Created Meetup')
            console.log(res);
            return res;
        } catch (e) {
              alert(e);
            // store.dispatch({
            //    type:"CREATE_MEETUP_ERROR"
            // })
        }
    }
}

export {
    MeetupApi
};