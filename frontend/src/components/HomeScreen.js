import DeckGL from '@deck.gl/react';
import {GeoJsonLayer} from '@deck.gl/layers';
import {PolygonLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';

import React, { useRef, useEffect, useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Selection } from 'reactstrap';


let preccintData = require('../maryland.json');
let districtData = require('../bad.json');

// console.log(data, 'the json obj');

const HomeScreen = (props) =>{
   // Set your mapbox access token here
    const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiZGl3bGl1IiwiYSI6ImNrdHQ1M3hjdTFuZWcycXBxczAyYnRud3EifQ.WUk5cILDRQQNOaae60Hb9A";
    
    // Viewport settings
    const INITIAL_VIEW_STATE = {
        longitude: -98.35,
        latitude: 39.50,
        zoom: 3,
        pitch: 0,
        bearing: 0
    };

    // Data to be used by the LineLayer
    // const data = [
    //     {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
    // ];

    // var groupBy = function(xs, key) {
    //   return xs.reduce(function(rv, x) {
    //     (rv[x[key]] = rv[x[key]] || []).push(x);
    //     return rv;
    //   }, {});
    // };

    // var temp = groupBy(data["features"], "districtID");
    // console.log(temp);
    
    const base = new GeoJsonLayer({
      id: 'geojson-layer',
      data : districtData,
      pickable: true,
      stroked: false,
      filled: true,
      extruded: true,
      pointType: 'circle',
      lineWidthScale: 20,
      lineWidthMinPixels: 2,
      getFillColor: [160, 160, 180, 200],
      getLineColor: [80, 80, 80],
      getPointRadius: 100,
      getLineWidth: 1,
      getElevation: 30
    });

    console.log(districtData);
    console.log(preccintData);

    const district = [];

    districtData["features"].forEach(element => {
      district.push(new GeoJsonLayer({
        id: 'geojson-layer',
        data : element,
        pickable: true,
        stroked: false,
        filled: true,
        extruded: false,
        pointType: 'circle',
        lineWidthScale: 20,
        lineWidthMinPixels: 2,
        getFillColor: [Math.random()*256, Math.random()*256, Math.random()*256],
        getLineColor: [80, 80, 80],
        getPointRadius: 100,
        getLineWidth: 5,
        getElevation: 30
      }))
    });

    const preccint = []

    preccintData["features"].forEach(element => {
      preccint.push(new GeoJsonLayer({
        id: 'geojson-layer',
        data : element,
        pickable: true,
        stroked: false,
        filled: true,
        extruded: false,
        pointType: 'circle',
        lineWidthScale: 20,
        lineWidthMinPixels: 2,
        getFillColor: [Math.random()*256, Math.random()*256, Math.random()*256],
        getPointRadius: 100,
        getLineWidth: 1,
        getElevation: 30
      }));
    })
   
    // preccint.push(new GeoJsonLayer({
    //   id: 'geojson-layer',
    //   data: data['features'][0],
    //   pickable: true,
    //   stroked: false,
    //   filled: true,
    //   extruded: true,
    //   pointType: 'circle',
    //   lineWidthScale: 20,
    //   lineWidthMinPixels: 2,
    // }))
    // preccint.push(new GeoJsonLayer({
    //   id: 'geojson-layer',
    //   data: data['features'][100],
    //   pickable: true,
    //   stroked: false,
    //   filled: true,
    //   extruded: false,
    //   pointType: 'circle',
    //   lineWidthScale: 20,
    //   lineWidthMinPixels: 2,
    //   getFillColor: [160, 160, 180, 200],
    //   getLineColor: [80, 80, 80],
    // }))

    // console.log(preccint);
    // const layer = new PolygonLayer({
    //   id: 'polygon-layer',
    //   data,
    //   pickable: true,
    //   stroked: true,
    //   filled: true,
    //   wireframe: true,
    //   lineWidthMinPixels: 1,
    //   getPolygon: d => d.contour,
    //   getElevation: d => d.population / d.area / 10,
    //   getFillColor: d => [d.population / d.area / 60, 140, 0],
    //   getLineColor: [80, 80, 80],
    //   getLineWidth: 1
    // });

    const layers = [
      // ...district,
      ...preccint
    ]
    return (
      <>
      <div>
        <div classname="sidebar">
          wrytuyifegrjiouewoi
        </div>
        <div>
          <DeckGL
          initialViewState={INITIAL_VIEW_STATE}
          controller={true}
          layers={layers}
          getTooltip={({object}) => object && (object.properties.name || object.properties.station)}
        >
          <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
        </DeckGL>
        </div>
      </div>
      </>
      );
}
export default HomeScreen;