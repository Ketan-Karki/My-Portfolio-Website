import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-90, 10, -32],
        center: [8, 32],
        scale: 1600,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[77.32366532474911, 28.604118405025037]}
        dx={-40}
        dy={-50}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text
          x="-4"
          y="-6"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="white"
        >
          {"Delhi"}
        </text>
      </Annotation>
      <Annotation
        subject={[79.45235225933396, 29.393142993775086]}
        dx={60}
        dy={-50}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="60" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Nainital"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
