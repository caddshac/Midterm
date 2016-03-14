/*
 * Create a simple map with the ArcGIS JavaScript API.
 * example: http://developers.arcgis.com/javascript/samples/map_simple/
 */

var map;
require([
  "esri/map", // modules need to be added to this list before dojo/domReady, separated by a comma and enclosed in quotation marks
  "dojo/domReady!" 
], function (
  Map // the names of functions corresponding to the modules need to be added to this list, separated by a comma
) {
  map = new Map("map", {
    basemap: "topo", // list of basemap names: https://developers.arcgis.com/javascript/jsapi/esri.basemaps-amd.html
    center: [-90, 30],
    zoom: 4
  });
  
  // code to add layers and map control goes here
  
});