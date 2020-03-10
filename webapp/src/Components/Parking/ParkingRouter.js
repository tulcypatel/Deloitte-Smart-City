import React from 'react';
import Parking from './Parking';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


function ParkingRouter() 
{
    const useStyles = makeStyles(theme => ({
        bg: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            // this is an example of how we can make the background look very fancy.
        },
        root: {

        },
        gridList: {
            width: "100%",
            height: "100%",
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
    }));

    const classes = useStyles();
    const mapStyles = {
        width: '25%',
        height: '25%'
      };

    return(
        <Router>
            <Switch>
            <div className={classes.bg}>
            <Route key='home' exact path='/parking/' component={() => 
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto', textAlign: 'center' }}>
                      <ListSubheader component="div">What type of event are you looking for?</ListSubheader>
                    </GridListTile>
                }/>
            </div>
            </Switch>
        </Router>
        // <Map
        // google={this.props.google}
        // zoom={8}
        // style={mapStyles}
        // initialCenter={{
        //  lat: 33.360355,
        //  lng: -111.801682
        // }}>
        //     <Marker position={{ lat: 48.00, lng: -122.00}} />
        // </Map>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAYaadUrcIYhGAEFKhJxL25hS8yP8gWOcA'
  })(Parking);

// export default ParkingRouter;

