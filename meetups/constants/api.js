import axios from 'axios';
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
            console.log(e);
        }
    }
}

export {
    MeetupApi
};