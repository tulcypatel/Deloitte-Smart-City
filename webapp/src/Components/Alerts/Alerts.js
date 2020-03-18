import React from 'react';

import { Grid, Typography, Card, CardContent} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';

export default function Alerts(props) {

    const [alerts, setAlerts] = React.useState([]);
    //const [loaded, setLoaded] = React.useState(false);

    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
        title: {
            fontSize: 14,
        }
      }));

    const classes = useStyles();

    React.useEffect(() => {
        
        axios.get('https://3jkld0ayk3.execute-api.us-west-1.amazonaws.com/AlertAPIBeta2/scan')
        .then(res => {
            setAlerts(res.data.Items);
          })

    }, []);

    if(!alerts) {
        return (<div>Loading...</div>)
    } else
    return (
        <div>
            <div className={classes.root}>
                <Grid container direction="column-reverse" justify="flex-end" alignItems="stretch" spacing={2}>
                    {alerts && alerts.map(alert => (
                        <Grid item xs={12} key={alert.AlertID.N}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    {alert.AlertDate.S + " " + alert.AlertTime.S}
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        {alert.AlertTitle.S}
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        {alert.AlertCategory.S}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {alert.AlertSummary.S}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );

}