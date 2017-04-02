export const fetchMeetups = () => 
    fetch('http://192.168.0.106:3000/api/meetups')
        .then(res => res.json())
        
         .catch(err => alert(err))
