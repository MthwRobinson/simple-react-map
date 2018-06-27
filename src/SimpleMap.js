import React, { Component } from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from 'react-simple-maps';

const wrapperStyles = {
    width: "100%",
    maxWidth: 980,
    margin: "0 auto",
}
// #E5BD0D
class SimpleMap extends Component {
  render(){
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
            scale: 205,
            rotation: [-11,0,0],
          }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto",
            background: "black"
          }}
        >
          <ZoomableGroup center={[0,20]} zoom={3}>

            <Geographies geography="/world-50m.json">
              {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                <Geography
                  key={i}
                  geography={geography}
                  projection={projection}
                  style={{
                  default: {
                    fill: "#202020",
                    stroke: "#404040",
                    strokeWidth: 0.75,
                    outline: "black",
                  },
                  hover: {
                    fill: "#5a5a5a",
                    stroke: "#607D8B",
                    strokeWidth: 0.75,
                    outline: "black",
                  },
                  pressed: {
                    fill: "#5a5a5a",
                    stroke: "#607D8B",
                    strokeWidth: 0.75,
                    outline: "black",
                  },
                  }}
                />
                ))}
            </Geographies>
            <Markers>
              <Marker marker={{ coordinates: [-0.5364, 51.3093]}}>
                <circle
                  cx={0}
                  cy={0}
                  r={8}
                  fill="#E5BD0D"
                  stroke="#E5BD0D"
                />
              </Marker>
              <Marker marker={{ coordinates: [36.3424, 33.4971]}}>
                <circle
                  cx={0}
                  cy={0}
                  r={8}
                  fill="#E5BD0D"
                  stroke="#E5BD0D"
                />
              </Marker>
              <Marker marker={{ coordinates: [52.1788, 58.3318]}}>
                <circle
                  cx={0}
                  cy={0}
                  r={8}
                  fill="#E5BD0D"
                  stroke="#E5BD0D"
                />
              </Marker>
            </Markers>
          </ZoomableGroup>
        </ComposableMap>

      </div>
    )
  }
}

export default SimpleMap;
