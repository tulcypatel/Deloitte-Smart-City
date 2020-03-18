import React from 'react';
import axios from 'axios';

import { Grid, Typography, Button, Card, CardContent, CardActions, CardMedia} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


export default function Events(props) {

    const [events, setEvents] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        cardStuff: {
            display: 'flex',
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
        title: {
            fontSize: 14,
        },
        grid: {
            padding: theme.spacing(3)
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
          },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: 151,
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        playIcon: {
            height: 38,
            width: 38,
        },
      }));

    const classes = useStyles();

    React.useEffect(() => {
        axios.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=5otTtHXbkTQSVFXb5wrduaI1GBWm7Xxg', {
            params: {
                sort: 'date,asc',
                stateCode: 'AZ',
                source: "ticketmaster",
                postalCode: "85281",
                radius: "5",
            }
        })
        .then(res => {
            console.log(res)
            if(res.data._embedded) {
                setEvents(res.data._embedded.events);
            }
            setLoading(false);
          })
    }, []);

    if(loading) {
        return (<div>Loading...</div>)
    } else
    return (
        <div>
            <div className={classes.root}>
                <Grid container justify="flex-end" alignItems="stretch" spacing={2} className={classes.grid}>
                    {events && events.map(event => (
                        <Grid item xs={12} key={event.id}>
                            <Card className={classes.cardStuff}>
                                <CardMedia
                                    className={classes.cover}
                                    image={event.images && event.images[1].url}
                                    title="Live from space album cover"
                                />
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <Typography component="h5" variant="h5">
                                            {event.name}
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            {event.dates.start.localDate + " " + event.dates.start.localTime}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        {event.url && 
                                        <Button size="small" color="primary" href={event.url}>
                                            Learn More
                                        </Button>}
                                        {event._embedded.venues && 
                                        <Button size="small" color="primary" href={event._embedded.venues[0].url}>
                                            Venue Info
                                        </Button>}
                                        { event._embedded.attractions &&
                                        <Button size="small" color="primary" href={event._embedded.attractions[0].url}>
                                            Host Info
                                        </Button>}

                                    </CardActions>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );

}