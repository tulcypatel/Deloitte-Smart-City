import React from 'react';

import axios from 'axios';

export default function Events(props) {

    const [events, setEvents] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        axios.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=5otTtHXbkTQSVFXb5wrduaI1GBWm7Xxg', {
            headers: {'Access-Control-Allow-Origin': '*'}
        })
        .then(res => {
            console.log(res)
            const data = res.data._embedded.events;
            setEvents(data);
          })
    }, []);

    return (
        <div>
            test - 
            {events && events.map(event => (
                event.name
            ))}
        </div>
    );

}