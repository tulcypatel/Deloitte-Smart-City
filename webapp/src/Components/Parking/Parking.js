import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import { Grid, Typography, Button, Card, CardContent, CardActions, CardMedia, Container} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

// import CurrentLocation from './Map';
const mapStyles = 
{width: '718px', height: '80%'};
// const containerStyle = 
// {position: 'relative', width: '100%', height: '80%'};
  // The style is copy from https://snazzymaps.com/style/2/midnight-commander DARK MODE
// const mapstyles= [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]


export class Parking extends Component {
  constructor(props) {
    super(props);
  
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

  // const classes = useStyles();
    // // var add = new this.props.google.maps.zoomControl
    // this.states = {
    //   stores: [{lat: 47.49855629475769, lng: -122.14184416996333}, //Does not work for some reason
    //           {latitude: 33.4255, longitude: -111.9400},
    //           {latitude: 33.4484, longitude: -112.0740},
    //           {latitude: 33.3062, longitude: -111.8413},
    //           {latitude: 33.3528, longitude: -111.7890},
    //           {latitude: 33.352336, longitude: -111.793414}, // Test location
    //           {latitude: 33.359913, longitude: -111.767059}, // Test location
    //           {latitude: 33.294041, longitude: -111.740705}, // Test location
    //           {latitude: 33.352781, longitude: -111.790964}, // Test location
    //           {latitude: 33.328375, longitude: -111.741462}, // Test location
    //           {latitude: 33.322270, longitude: -111.736390},
    //           {latitude: 33.291940, longitude: -111.805010},
    //           {latitude: 33.352480, longitude: -111.692690},
    //           {latitude: 33.4152, longitude: -111.8315}]
    // }
  }

    state = {
      activeMarker: {},          //Shows the active marker upon click
      selectedPlace: {},         //Shows the infoWindow to the selected place upon a marker
      showingInfoWindow: false,  //Hides or the shows the infoWindow
      isDarkmodeVisible: false,
      mapstyles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]
    };
onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
    
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};

  // toggleDarkmode() {
  //   this.setState({isDarkmodeVisible: !this.state.isDarkmodeVisible})
  // }
onDarkMode = props =>{
  if(!this.state.isDarkmodeVisible){
    this.setState({
      mapstyles: props,
      isDarkmodeVisible: true,
    });
  }
}
offDarkMode = props =>{
  if(this.state.isDarkmodeVisible){
    this.setState({
      isDarkmodeVisible: false,
      mapstyles: null 
    });
  }
};


  // const classes = useStyles();
  render() {
    console.log(this.state.mapstyles);
    console.log(this.props.styles)
    return (
      <GridList cellHeight={180} className={this.useStyles}>
        <Map
          google={this.props.google}
          zoom={10}
          style={mapStyles}
          onRightclick={this.onDarkMode}
          
          onDblclick={this.offDarkMode}
          styles={this.state.mapstyles}
          initialCenter={{ lat: 33.360355, lng: -111.801682}}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={'Queen Creek town center has 30 spots available'}
            position={{lat: 33.2486, lng: -111.6346}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Tempe Town Lake has 20 spots available'}
            position={{lat: 33.4255, lng: -111.9400}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'The Barn and Trailside community park has 80 spots available'}
            position={{lat:33.284547, lng:-111.698873}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Play Park has 12 spots available'}
            position={{lat:33.276343, lng:-111.699118}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Arbors Park in Power Ranch has 42 spots available'}
            position={{lat: 33.275057, lng: -111.708220}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Menlo Park has 36 spots available'}
            position={{lat: 33.280037, lng: -111.715229}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Veterans Oasis Park has 48 spots available'}
            position={{lat: 33.235700, lng: -111.767976}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Tumble Weed Park has 57 spots available'}
            position={{lat: 33.272812, lng: -111.829431}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Freestone Park has 13 spots available'}
            position={{lat: 33.358641, lng: -111.767833}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Rancho Del Mar Park has 89 spots available'}
            position={{lat: 33.365546, lng: -111.849588}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Chandler Festival has 137 spots available'}
            position={{lat: 33.307458, lng: -111.887244}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Chandler Fashion Square has 0 spots available'}
            position={{lat: 33.301975, lng: -111.897973}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'South Mountain Park and Preserve has 27 spots available'}
            position={{lat: 33.346158, lng: -112.055558}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Mesquite Groves Aquatic Center has 0 spots available'}
            position={{lat: 33.220568, lng: -111.763133}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Top Golf has 0 spots available'}
            position={{lat: 33.321202, lng: -111.741480}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Gilbert Town Square has 200 spots available'}
            position={{lat: 33.330896, lng: -111.792749}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'San Tan Village Marketplace has 13 spots available'}
            position={{lat: 33.301295, lng: -111.744110}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'San Tan Mountain Regional Park has 25 spots available'}
            position={{lat: 33.167336, lng: -111.642830}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Coyote Run Golf Course has 67 spots available'}
            position={{lat: 33.398581, lng: -111.705644}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'GolfLand Sunsplash has 71 spots available'}
            position={{lat: 33.387978, lng: -111.837496}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Dobson Ranch Golf Course has 101 spots available'}
            position={{lat: 33.374174, lng: -111.876285}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Cactus Yards has 83 spots available'}
            position={{lat: 33.354817, lng: -111.694103}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Barrett The Honors College ASU has 150 spots available'}
            position={{lat: 33.415319, lng: -111.927445}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Papago Golf Course has 33 spots available'}
            position={{lat: 33.460798, lng: -111.956868}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Tempe Beach Park has 97 spots available'}
            position={{lat: 33.430575, lng: -111.941842}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Phoenix Sky Harbor has 3000 spots available'}
            position={{lat: 33.434588, lng: -112.021217}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Phoenix Art Museum has 0 spots available'}
            position={{lat: 33.467379, lng: -112.073140}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Steele Indian School Park has 123 spots available'}
            position={{lat: 33.498591, lng: -112.071161}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Arizona Science Center has 99 spots available'}
            position={{lat: 33.448797, lng: -112.066928}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'K1 Racing has 81 spots available'}
            position={{lat: 33.425163, lng: -112.034546}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Raven Golf Club has 43 spots available'}
            position={{lat: 33.384175, lng: -112.008822}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Cesar Chavez Park has 57 spots available'}
            position={{lat: 33.369866, lng: -112.138343}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Big Surf has 48 spots available'}
            position={{lat: 33.445695, lng: -111.914360}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Casino Arizona has 700 spots available'}
            position={{lat: 33.454289, lng: -111.887318}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Talking Stick Resort has 420 spots available'}
            position={{lat: 33.539607, lng: -111.872721}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'McDowell Mountain Regional Park has 78 spots available'}
            position={{lat: 33.679141, lng: -111.763539}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Phoenix Mesa Gateway Airport has 1200 spots available'}
            position={{lat: 33.311488, lng: -111.662158}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Red Mountain Park has 47 spots available'}
            position={{lat: 33.433650, lng: -111.663561}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Gila River Hotels and Casinos has 189 spots available'}
            position={{lat: 33.288178, lng: -111.940868}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Pecos Community Park has 249 spots available'}
            position={{lat: 33.291981, lng: -111.978585}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Krispy Kreme has 26 spots available'}
            position={{lat: 33.415267, lng: -111.874214}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Sumida Park has 0 spots available'}
            position={{lat: 33.543785, lng: -112.042931}} 
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Cave Buttes Recreation Area has 657 spots available'}
            position={{lat: 33.711848, lng: -112.057732}} 
          />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </Map>
      </GridList>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(Parking);