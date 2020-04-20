import React from 'react';

import { Grid, Typography, Card, CardContent, Button, Menu, MenuItem } from '@material-ui/core'
import FilterListIcon from '@material-ui/icons/FilterList';
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';

export default function Alerts(props) {

    const [alerts, setAlerts] = React.useState([]);
    //const [loaded, setLoaded] = React.useState(false);
    const [filter, setFilter] = React.useState("All");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [filteredAlerts, setFilteredAlerts] = React.useState([]);

    const useStyles = makeStyles(theme => ({
        bg: {
        
          //  background-color: '#2a2a72',
            background: 'linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)',
            // this is an example of how we can make the background look very fancy.
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

    const handleClick = (event) => { setAnchorEl(event.currentTarget); }

    const handleMenuItemClick = (event, index) => {
        setFilter(index);
        setAnchorEl(null);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    React.useEffect(() => {

        if(filter !== "All") {

            var tempArray = [];
            for(var index = 0; index < alerts.length; index++) {
                if(alerts[index].AlertCategory.S === (filter + " Event")) {
                    tempArray.push(alerts[index]);
                }
            }
            setFilteredAlerts(tempArray);

        } else {
            setFilteredAlerts(alerts);
        }

    }, [filter]);

    React.useEffect(() => {
        
        axios.get('https://3jkld0ayk3.execute-api.us-west-1.amazonaws.com/AlertAPIBeta2/scan')
        .then(res => {
            setAlerts(res.data.Items);
            setFilteredAlerts(res.data.Items);
          })

    }, []);

    if(!alerts) {
        return (<div>Loading...</div>)
    } else
    return (
        <div>
            <div className={classes.bg}>
            <div className={classes.root}>
                <div className={classes.header}>
                    <Button aria-controls="simple menu" color="inherit" aria-haspopup="true" onClick={handleClick} endIcon={<FilterListIcon/>}>
                        {filter}
                    </Button>
                    <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                        <MenuItem onClick={(event) => handleMenuItemClick(event, "All")}>All</MenuItem>
                        <MenuItem onClick={(event) => handleMenuItemClick(event, "Sport")}>Sport</MenuItem>
                        <MenuItem onClick={(event) => handleMenuItemClick(event, "Food")}>Food</MenuItem>
                    </Menu>
                </div>
                <Grid container direction="column-reverse" justify="flex-end" alignItems="stretch" spacing={2} className={classes.card}>
                    {filteredAlerts && filteredAlerts.map(alert => (
                        <Grid item xs={12} key={alert.AlertID.N}>
                            <Card>
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
        </div>
    );

}