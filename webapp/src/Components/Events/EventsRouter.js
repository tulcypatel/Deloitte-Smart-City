import React from 'react';
//import './Events.css';

import Events from './Events';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function EventsRouter() {

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

    const eventTypes = [
        {
            type: "All Events",
            image: "events.png",
            subtitle: "TicketMaster",
            description: "this is a temporary description",
            url: "all"
        },
        {
            type: "Art",
            image: "art.png",
            subtitle: "TicketMaster",
            description: "this is a temporary description",
            url: "art"
        },
        {
            type: "Festivals",
            image: "festivals.png",
            subtitle: "TicketMaster",
            description: "this is a temporary description",
            url: "festivals"
        },
        {
            type: "Jazz",
            image: "jazz.png",
            subtitle: "TicketMaster",
            description: "this is a temporary description",
            url: "jazz"
        },
        {
            type: "Music",
            image: "music.png",
            subtitle: "TicketMaster",
            description: "this is a temporary description",
            url: "music"
        },
        {
            type: "Sports",
            image: "sports.png",
            subtitle: "TicketMaster",
            description: "this is a temporary description",
            url: "sports"
        },
        {
            type: "Theater",
            image: "theater.png",
            subtitle: "TicketMaster",
            description: "this is a temporary description",
            url: "theater"
        }
    ]

    return (
        <Router>
          <div className={classes.bg}>
            <Switch>
              <Route key='home' exact path='/events/' component={() => 
                <div className={classes.root}>
                    <br/>
                  <GridList cellHeight={180} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto', textAlign: 'center' }}>
                      <ListSubheader component="div">What type of event are you looking for?</ListSubheader>
                    </GridListTile>
                      {eventTypes.map(tile => (
                          <GridListTile key={tile.image} style={{cursor: 'pointer', padding: "2%"}} onClick={() => console.log("clicked!" + tile.type)} component={Link} to={'/events/' + tile.url}>
                          <img src="https://www.asu.edu/sites/default/files/styles/section_tab_item/public/section-tab-image/EntreprenuershipDegree.jpg" alt={tile.type} />
                          <GridListTileBar
                            title={tile.type} subtitle={<span>{tile.subtitle}</span>}
                          />
                          </GridListTile>
                        ))}
                  </GridList>
                </div>
              }/>
              <Route key='art' path='/events/art' component={() => <Events keyword="art"/>}/>
              <Route key='all' path='/events/all' component={() => <Events keyword="any"/>}/>
              <Route key='festivals' path='/events/festivals' component={() => <Events keyword="festivals"/>}/>
              <Route key='jazz' path='/events/jazz' component={() => <Events keyword="jazz"/>}/>
              <Route key='music' path='/events/music' component={() => <Events keyword="music"/>}/>
              <Route key='sports' path='/events/sports' component={() => <Events keyword="sports"/>}/>
              <Route key='theater' path='/events/theater' component={() => <Events keyword="theater"/>}/>
              <Route component={() => <div>404</div>}/>
            </Switch>
            <br/>
          </div>
        </Router>
    );

  }

export default EventsRouter;