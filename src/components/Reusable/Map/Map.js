import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import './Map.css';

const AnyReactComponent = ({ marker }) => <img src={'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522930171/map/cayan-map.svg'}/>;



class Map extends Component {
    static defaultProps = {
    center: {lat: 41.016431,lng: 28.653232},
    zoom: 15,




  };

  render() {
    return (
          <div className="map col s11 l4">
                    <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCqSra2dJrK9aHJW9sRaHtdkVhx2luhbf0" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}


        >
          <AnyReactComponent
            lat={41.016431}
            lng={28.653232}


          />
        </GoogleMapReact>
          </div>
    );
  }
}

export default Map;
