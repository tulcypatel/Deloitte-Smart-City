import React, {useEffect} from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import HomeIcon from '@material-ui/icons/Home';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EventIcon from '@material-ui/icons/Event';


import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Test from './Components/Test.js';
import Login from './Components/Auth/Login.js';
import Register from './Components/Auth/Register.js';
import Alerts from './Components/Alerts/Alerts.js';
import Events from './Components/Events/EventsRouter';
import Parking from './Components/Parking/ParkingRouter';
import Home from './Components/Home/HomeRouter';
import Deals from './Components/Deals/Deals.js';


function App() {

    const useStyles = makeStyles(() => ({
      navbar: {
        flexGrow: 1,
        background: '#000000',
      },
      navicon: {
        color: '#75787bff',
        '&$selected': {
          color: '#86bc25ff',
        },
      },
      title: {
        flexGrow: 1,
      },
      toolbar: {
        flexGrow: 1,
        background: '#012169f',
      },
      selected: { color: '#86bc25ff'},
    }));

    const classes = useStyles();
    const [value, setValue] = React.useState('Home');
  
    const handleChange = (_, newValue) => {
      setValue(newValue);
    };

    
    useEffect(() => {
      //console.log(window.location.pathname.split('/')[1])
      if(window.location.pathname === "/") {
        setValue("Home")
      } else
      setValue(window.location.pathname.substr(1).split('/').join(' » '));
      
      switch(window.location.pathname.split('/')[1]) {
        case "":
          setValue("Home");
          break;
        case "events":
          setValue("Events");
          break;
        case "deals":
          setValue("Deals");
          break;
        case "parking":
          setValue("Parking");
          break;
        case "alerts":
          setValue("Alerts");
          break;
        case "profile":
          setValue("Profile");
          break;
        default:
          setValue("Page Not Found");
      }
      
    }, []);
    

    return (
      <div className="wrapper">
      	<Router>
          <div className='main-navbar'>
            <BottomNavigation value={value} onChange={handleChange} className={classes.navbar}>
              <BottomNavigationAction classes={{root: classes.navicon, selected: classes.selected, }} component={Link} to='/' name='Home' label="Home" value="Home" icon={<HomeIcon/>}/>
              <BottomNavigationAction classes={{root: classes.navicon, selected: classes.selected, }} component={Link} to='/events' name='Events' label="Events" value="Events" icon={<EventIcon/>}/> 
              <BottomNavigationAction classes={{root: classes.navicon, selected: classes.selected, }} component={Link} to='/deals' name='Deals' label="Deals" value="Deals" icon={<MoneyOffIcon/>}/> 
              <BottomNavigationAction classes={{root: classes.navicon, selected: classes.selected, }} component={Link} to='/parking' name='Parking' label="Parking" value="Parking" icon={<DirectionsCarIcon/>}/> 
              <BottomNavigationAction classes={{root: classes.navicon, selected: classes.selected, }} component={Link} to='/alerts' name='Alerts' label="Alerts" value="Alerts" icon={<NotificationsIcon/>}/> 
            </BottomNavigation>
          </div>
          <AppBar position="static">
            <Toolbar className={classes.toolbar}>
              <Typography variant="h6" className={classes.title}>
                SmartCity - Phoenix Metro Area
              </Typography>
              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>
              <Button component={Link} to="/Register" color="inherit">
                Register
              </Button>
            </Toolbar>
          </AppBar>
          <div className="mobile-simulation">
            <Switch>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
              <Route key='home' path='/' exact component={() => <Home/>}/> 
              <Route key='events' path='/events' component={() => <Events/>}/>
              <Route key='deals' path='/deals' component={() => <Deals/>}/>
              <Route key='parking' path='/parking' component={() => <Parking/>}/>
              <Route key='alerts' path='/alerts' component={() => <Alerts/>}/>
              <Route key='profile' path='/profile' component={() => <Test test="PROFILE"/>}/>
              <Route component={() => <Test test="404 PAGE"/>}/>
            </Switch>
            <br/>
          </div>
        </Router>
      </div>
    );

  }

export default App;
