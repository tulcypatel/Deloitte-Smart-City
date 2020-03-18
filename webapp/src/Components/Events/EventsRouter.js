import React from 'react';
//import './Events.css';

import Events from './Events';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import EventIcon from '@material-ui/icons/Event';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function EventsRouter() {

    const useStyles = makeStyles(theme => ({
        bg: {
        
          //  background-color: '#2a2a72',
            background: 'linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)',
            // this is an example of how we can make the background look very fancy.
        },
        root: {

        },
        gridList: {
            width: "100%",
            height: "100%",
        },
        
         icon: {
            color: 'white',
        
  }
    }));

    const classes = useStyles();

    const eventTypes = [
        {
            type: "All Events",
            image: "https://images.squarespace-cdn.com/content/v1/5658a2c6e4b05079e4aa5b3a/1510609420428-DN22ES1T3IK1WSPFKMPJ/ke17ZwdGBToddI8pDm48kEcbshvcSGZ1-EJ1llaZXaYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKch6dBViol2SJSgKkz5MvpIopx2P8ZMmVOCNcrwgIx4IdzP9B0KncSoma1kZTayaFy/all+events.jpg?format=2500w",
            subtitle: "TicketMaster",
            description: "this is a temporary description",
            url: "all"
        },
        {
            type: "Art",
            image: "https://media2.fdncms.com/sacurrent/imager/u/original/2651673/rachel_maclean_artpace.jpg",
            subtitle: "TicketMaster",
            description: "this is a temporary description",
            url: "art"
        },
        {
            type: "Festivals",
            image: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/cover11.jpg",
            subtitle: "TicketMaster",
            description: "this is a temporary description",
            url: "festivals"
        },
        {
            type: "Jazz",
            image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F74717095%2F209717592418%2F1%2Foriginal.20190928-182839?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C238%2C2160%2C1080&s=8affb352db560f50ce80d13860d2433f",
            subtitle: "TicketMaster",
            description: "this is a temporary description",
            url: "jazz"
        },
        {
            type: "Music",
            image: "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/12/22223742/Events-1200x630.jpg",
            subtitle: "TicketMaster",
            description: "this is a temporary description",
            url: "music"
        },
        {
            type: "Sports",
            image: "https://aists.org/wp-content/uploads/2019/10/pho10933390.retouche_0.jpg",
            subtitle: "TicketMaster",
            description: "this is a temporary description",
            url: "sports"
        },
        {
            type: "Theater",
            image: "https://assets.website-files.com/58337d1d96c13a1f491f65be/58339103fe84063b78f06377_Panida_from-balcony-AllerGale-1920x1080px-v3.jpg",
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
                      <ListSubheader component="div" style ={{color:'white'}}>What type of event are you looking for?</ListSubheader>
                    </GridListTile>
                      {eventTypes.map(tile => (
                          <GridListTile key={tile.image} style={{cursor: 'pointer', padding: "2%"}} onClick={() => console.log("clicked!" + tile.type)} component={Link} to={'/events/' + tile.url}>
                          <img src={tile.image} alt={tile.type} />
                          <GridListTileBar
                            style = {{background:
              'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'}}
                            actionIcon={
                <IconButton aria-label={`star ${tile.title}`} style ={{color:'white'}}>
                  <EventIcon className={classes.title} />
                </IconButton>
              }
                            title={tile.type} subtitle={<span>{tile.subtitle}</span>}
                    
                          />
                          </GridListTile>
                        ))}
                  </GridList>
                </div>
              }/>
              <Route key='art' path='/events/art' component={() => <Events keyword="art"/>}/>
              <Route key='all' path='/events/all' component={() => <Events keyword=""/>}/>
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