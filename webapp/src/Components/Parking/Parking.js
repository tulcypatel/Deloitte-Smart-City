import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

// import CurrentLocation from './Map';
const mapStyles = {
  width: '56%',
  height: '100%'
};

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

    this.state = {
      showingInfoWindow: false,  //Hides or the shows the infoWindow
      activeMarker: {},          //Shows the active marker upon click
      selectedPlace: {},         //Shows the infoWindow to the selected place upon a marker
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

    states = {
      showingInfoWindow: false,  //Hides or the shows the infoWindow
      activeMarker: {},          //Shows the active marker upon click
      selectedPlace: {}         //Shows the infoWindow to the selected place upon a marker
    };

  onClose = props => {
    if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
    }
};

onMarkerClick = (props, marker, e) =>
this.setState({
selectedPlace: props,
activeMarker: marker,
showingInfoWindow: true
});

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index}
      position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => this.onMarkerClick} //console.log("This works")
     />
    })
  }

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={10}
          style={mapStyles}
          initialCenter={{ lat: 33.360355, lng: -111.801682}}
        >
          {this.displayMarkers()}
          {/* <Marker
           onClick={this.onMarkerClick}
           name={'Gilbert, Arizona'}
          />  */}
          <InfoWindow
          marker={this.states.activeMarker}
          visible={this.states.showingInfoWindow}
          onClose={this.onClose}>
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