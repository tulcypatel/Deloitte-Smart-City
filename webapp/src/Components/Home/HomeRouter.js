import React from 'react';


//import Home from './Home';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function HomeRouter() {

    const useStyles = makeStyles(theme => ({
        bg: {
            background: 'linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)',
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

    const homePages = [
        {
            type: "Deals",
            image: "https://m.media-amazon.com/images/G/01/DeveloperBlogs/AlexaBlogs/default/blog_leaderboard-sdk_954x240.png._CB442786809_.png",
            subtitle: "Check out where you rank",
            description: "this is a temporary description",
            url: "deals"
        },
        {
            type: "Events",
            image: "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/12/22223742/Events-1200x630.jpg",
            subtitle: "Check out the events near you",
            description: "this is a temporary description",
            url: "events"
        },
        
    ]

 return (
        <Router>
          <div className={classes.bg}>
            <Switch>
              <Route key='home' exact path='/' component={() => 
                <div className={classes.root}>
                    <br/>
                  <GridList cellHeight={180} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto', textAlign: 'center' }}>
                      <ListSubheader component="div" style={{color:'white'}}>Welcome to City Circle!</ListSubheader>
                    </GridListTile>
                      {homePages.map(tile => (
                          <GridListTile key={tile.image} cols={2} style={{cursor: 'pointer', padding: "2%"}} onClick={() => console.log("clicked!" + tile.type)} component={Link} to={'/' + tile.url}>
                          <img src={tile.image} alt={tile.title} />
                          <GridListTileBar
                            title={tile.type} subtitle={<span>{tile.subtitle}</span>}
                          />
                          </GridListTile>
                        ))}
                  </GridList>
                </div>
              }/>
       
            </Switch>
            <br/>
          </div>
        </Router>
    );

  }

export default HomeRouter;