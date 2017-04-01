export const fetchMeetups = () =>
    fetch('http://localhost:3000/api/meetups')
        .then(res => res.json())
        .then(function (json) {
            return {
                title: json.title,
                description: description
            }
        })
        .catch(err => alert(err))