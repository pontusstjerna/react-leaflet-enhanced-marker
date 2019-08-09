import React, { Component, Fragment } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import Markers from './Marker/Markers'

class Main extends Component {
  state = {
    count: 0
  }
  render() {
    return (
      <Fragment>
        <div>ishaan is here</div>
        <Map style={{ height: '700px', width: '700px', border: '0px' }} center={[32, -96]} zoom={6}>
          <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />

          <Markers
            onClick={() => console.log('here')}
            icon={
              <img
                onClick={() => alert('here')}
                src={img}
                style={{
                  width: '100'
                }}
              />
            }
            highlight
          />
        </Map>
      </Fragment>
    )
  }
}
export default Main
