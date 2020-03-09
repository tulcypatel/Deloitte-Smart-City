import React, {useState, useEffect} from 'react';

export default function Events(props) {

    const [events, setEvents] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        async function fetchData() {
            console.log(props.keyword);
            const res = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?postalCode=85281&radius=200&keyword=` + props.keyword + "&apikey=VydxfkG5lmRqboQK6sEOxluYAIKD9Uxd", {mode: 'no-cors'})
            res.json()
            .then(res => setEvents(res), setLoaded(true))
            .catch(error => console.log(error))
        }
        fetchData();

    }, []);

    if(loaded) return (
        <div>
            there are {events.length} events returned
        </div>
    );
    else return (
        <div>loading</div>
    );

}