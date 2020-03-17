import React, {useState, useEffect} from 'react';

import axios from 'axios';

export default function Alerts(props) {

    const [alerts, setAlerts] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        /*
        axios.get('https://3jkld0ayk3.execute-api.us-west-1.amazonaws.com/AlertAPIBeta2/scan')
        .then(res => {
            console.log(res)
            //const data = res;
            //setEvents(data);
          })
        */
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