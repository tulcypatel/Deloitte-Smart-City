import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

// import CurrentLocation from './Map';
const mapStyles = 
{width: '100%', height: '80%', position: 'relative'};
// const containerStyle = 
// {position: 'relative', width: '100%', height: '80%'};
  // The style is copy from https://snazzymaps.com/style/2/midnight-commander DARK MODE
  const mapstyles= [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]
  // var styledMapType = new google.maps.StyledMapType(mapstyles)
// var myLatLng = {lat: 33.360355, lng: -111.801682}
// var myLng = {lat: 33.359423, lng: -111.021071}


// export class Parking extends Component {
//   // constructor(props) {
//   //   super(props);

//   //   this.generate = {
//   //     stores: [{latitude: 33.49855629475769, longitude: -111.14184416996333},
//   //       {latitude: 33.359423, longitude: -111.021071},
//   //       {latitude: 33.2052192687988, longitude: -111.988426208496},
//   //       {latitude: 33.6307081, longitude: -111.1434325},
//   //       {latitude: 33.3084488, longitude: -111.2140121},
//   //       {latitude: 33.5524695, longitude: -111.0425407}]
//   //   }
//   // }

//   park = {
//     showingInfoWindow: false,
//     activeMarker: {},
//     selectedPlace: {},
//     mapReady: true,
//     desc: '',
//     animation: null,
//     locations: 
//   [
//    {
//     "locationName": "Skyline Steel Parking",
//     "position": '{"lat": "33.49855629475769", "lng": "-111.14184416996333"}',
//     "desc": "5 spots available"
//   },
//   {
//     "locationName": "McQueen Park Parking",
//     "position": '{"lat": "33.359423", "lng": "-111.021071"}',
//     "desc": "50 spots available"
//   },
//   {
//     "locationName": "Dierks Bentley's Whiskey Row Parking",
//     "position": '{"lat": "33.2052192687988", "lng": "-111.988426208496"}',
//     "desc": "15 spots available"
//   },
//   {
//     "locationName": "Oak Tree Parking",
//     "position": '{"lat": "33.6307081", "lng": "-111.1434325"}',
//     "desc": "70 spots availble"
//   },
//   {
//     "locationName": "Kokopelli Golf Club Parking",
//     "position": '{"lat": "33.3084488", "lng": "-111.2140121"}',
//     "desc": "32 spots available"
//   }
//   ]
//   };

//     state = {
      // showingInfoWindow: false,  //Hides or the shows the infoWindow
      // activeMarker: {},          //Shows the active marker upon click
      // selectedPlace: {}         //Shows the infoWindow to the selected place upon a marker
//   };

//     // displayMarkers = () => {
//     //   return this.generate.stores.map((store) => {
//     //     return <Marker key={store.Store_ID} position={{
//     //      lat: store.latitude,
//     //      lng: store.longitude
//     //    }}
//     //    onClick={() => console.log("You clicked me!")} />
//     //   })
//     // }
    

//     renderMarkers() {
//       return this.park.locations.map((location, i) => {
//         return <Marker
//           key={ i }
//           onClick = { this.onMarkerClick }
//           title = { location.locationName }
//           position = { JSON.parse(location.position) }
//           desc = { location.desc }
//           animation = { this.props.google.maps.Animation.DROP }
//           name = { location.locationName } />
//       })
//     }

    // onMarkerClick = (props, marker, e) =>
    //     this.setState({
    //     selectedPlace: props,
    //     activeMarker: marker,
    //     showingInfoWindow: true
    // });

    // onClose = props => {
    //     if (this.state.showingInfoWindow) {
    //         this.setState({
    //             showingInfoWindow: false,
    //             activeMarker: null
    //         });
    //     }
    // };
    

//   render() {
    
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{
//             lat: 33.360355,
//             lng: -111.801682
//         }}>
//           <div>{this.renderMarkers()}</div>
//       {/* <Marker
//           onClick={this.onMarkerClick}
//           name={'Gilbert, Arizona'}
//           position={this.renderMarkers()}
//         /> */}
        
        // <InfoWindow
        //   marker={this.state.activeMarker}
        //   visible={this.state.showingInfoWindow}
        //   onClose={this.onClose}
        // >
        //   <div>
        //     <h4>{this.state.selectedPlace.name}</h4>
        //   </div>
        // </InfoWindow>
//         </Map>
//     );
//   }
// }

export class Parking extends Component {
  constructor(props) {
    super(props);

    // var add = new this.props.google.maps.zoomControl
    this.states = {
      // showingInfoWindow: false,  //Hides or the shows the infoWindow
      // activeMarker: {},          //Shows the active marker upon click
      // selectedPlace: {},         //Shows the infoWindow to the selected place upon a marker
      stores: [{lat: 47.49855629475769, lng: -122.14184416996333}, //Does not work for some reason
              {latitude: 33.4255, longitude: -111.9400},
              {latitude: 33.4484, longitude: -112.0740},
              {latitude: 33.3062, longitude: -111.8413},
              {latitude: 33.3528, longitude: -111.7890},
              {latitude: 33.352336, longitude: -111.793414}, // Test location
              {latitude: 33.359913, longitude: -111.767059}, // Test location
              {latitude: 33.294041, longitude: -111.740705}, // Test location
              {latitude: 33.352781, longitude: -111.790964}, // Test location
              {latitude: 33.328375, longitude: -111.741462}, // Test location
              {latitude: 33.322270, longitude: -111.736390},
              {latitude: 33.291940, longitude: -111.805010},
              {latitude: 33.352480, longitude: -111.692690},
              {latitude: 33.4152, longitude: -111.8315}]
    }
  }

    state = {
      activeMarker: {},          //Shows the active marker upon click
      selectedPlace: {},         //Shows the infoWindow to the selected place upon a marker
      showingInfoWindow: false,  //Hides or the shows the infoWindow
      // isHeatmapVisible: false
      // isDarkmodeVisible: false,

    };

//   onClose = props => {
//     if (this.states.showingInfoWindow) {
//         this.setState({
//             showingInfoWindow: false,
//             activeMarker: null
//         });
//     }
// };

// onMarkerClick = (props, marker, e) =>
// this.setState({
// selectedPlace: props,
// activeMarker: marker,
// showingInfoWindow: true
// });

// onMarkerClick = (props, marker) =>
//     this.setState({
//       activeMarker: marker,
//       selectedPlace: props,
//       showingInfoWindow: true
//     });

//   onInfoWindowClose = () =>
//     this.setState({
//       activeMarker: null,
//       showingInfoWindow: false
//     });

//   onMapClicked = () => {
//     if (this.states.showingInfoWindow)
//       this.setState({
//         activeMarker: null,
//         showingInfoWindow: false
//       });
//   };


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

  // displayMarkers = () => {
  //   return this.state.stores.map((store, index) => {
  //     return <Marker key={index} id={index}
  //     label={{text: 'hello'}}
  //     position={{
  //      lat: store.latitude,
  //      lng: store.longitude
  //    }}
  //    onClick={() => this.onMarkerClick} //console.log("This works")
  //    />
  //   })
  // }
  // toggleHeatmap() {
  //   this.setState({isHeatmapVisible: !this.state.isHeatmapVisible})
  // }
  toggleDarkmode() {
    this.setState({isDarkmodeVisible: !this.state.isDarkmodeVisible})
  }
  // map = <HeatMap
  //   gradient={gradient}
  //   opacity = {3}
  //   positions = {this.props.policeCall.map(({M, N}) => {
  //     return {lat: M, lng: N};
  //   })}
  //   radius={30}
  //   />

  render() {
    return (
        <Map
          google={this.props.google}
          // onClick={this.onMarkerClick}
          zoom={10}
          style={mapStyles}
          // styles={mapstyles}
          // containerStyle={containerStyle}
          initialCenter={{ lat: 33.360355, lng: -111.801682}}
          // mapTypeControl = {true} This is where I am trying to edit the control.
          // mapTypeControlOptions= {{
          //   style: this.props.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          //   mapTypeIds:['roadmap', 'darkmode']
          // }}
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
          {/* {this.displayMarkers()} */}
          {/* <Marker
           onClick={this.onMarkerClick}
           name={'Gilbert, Arizona'}
          />  */}
          {/* <InfoWindow
          marker={this.states.activeMarker}
          visible={this.states.showingInfoWindow}
          onClose={this.onClose}>
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow> */}

        {/* <InfoWindow
          marker={this.states.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.states.showingInfoWindow}>
          <div>
            <h1>{this.states.selectedPlace.name}</h1>
          </div>
        </InfoWindow> */}
        {/* <div id="floating-panel">
          <Button onclick="toggleDarkmode()">Toggle Dark Mode</Button>
        </div> */}
        
        {/* <HeatMap
          // gradient={gradient}
          opacity = {3}
          positions = {this.states.stores(({M, N}) => {
          return {lat: M, lng: N};
          })}
          radius={30}
        /> */}
         {/* {this.state.isHeatmapVisible ? map : null} */}
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
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(Parking);