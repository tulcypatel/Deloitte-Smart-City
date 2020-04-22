import React from 'react';

import { Grid, Typography, Card, CardContent, Button, Menu, MenuItem, CardActions } from '@material-ui/core'
import FilterListIcon from '@material-ui/icons/FilterList';
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';

export default function Deals(props) {

    const [deals, setDeals] = React.useState([]);

    const useStyles = makeStyles(theme => ({
        bg: {
            background: 'linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)',
        },
        root: {
          flexGrow: 1,
          borderRadius: 3,
          border: 0, 
          padding: '0 20px',
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
        title: {
            fontSize: 14,
        },
        header: {
            justifyContent: 'space-evenly',
            textAlign: 'right',
            padding: '1%',
        },
        card: {
            paddingTop: '1%',
        }
      }));

    const classes = useStyles();

    React.useEffect(() => {
        
        axios.get('https://aqn4lg5g0e.execute-api.us-west-1.amazonaws.com/V2/scan')
        .then(res => {
            //console.log(res)
            setDeals(res.data.Items);
            //setFilteredAlerts(res.data.Items);
          })

    }, []);

    if(!deals) {
        return (<div>Loading...</div>)
    } else
    return (
        <div>
            <div className={classes.bg}>
                <div className={classes.root}>
                    <Grid container direction="column-reverse" justify="flex-end" alignItems="stretch" spacing={2} className={classes.card}>
                        {deals && deals.map(deal => (
                            <Grid item xs={12} key={deal['Deal ID'].N}>
                                <Card>
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            {deal['Deal Date'].S}
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            {deal['Deal Title'].S}
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                            {deal['Deal Company'].S}
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            {deal['Deal Details'].S}
                                        </Typography>
                                        {deal['Deal Code'].S !== "NONE" && 
                                        <Typography variant="body2" component="p">
                                            {deal['Deal Code'].S}
                                        </Typography>
                                        }
                                    </CardContent>
                                    {deal['Deal URL'].S !== "NONE" && 
                                    <CardActions>
                                        <Button size="small" color="primary" href={deal['Deal URL'].S}>
                                            Learn More
                                        </Button>
                                    </CardActions>
                                    }
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    );

}