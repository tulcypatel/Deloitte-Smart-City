import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import HomeIcon from '@material-ui/icons/Home';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function BottomNavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Events" value="events" icon={<EventIcon />} />
      <BottomNavigationAction label="Deals" value="deals" icon={<MoneyOffIcon />} />
      <BottomNavigationAction label="Parking" value="parking" icon={<DirectionsCarIcon />} />
      <BottomNavigationAction label="Alerts" value="alerts" icon={<NotificationsIcon />} />
    </BottomNavigation>
  );
}