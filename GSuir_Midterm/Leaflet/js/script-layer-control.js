var map = L.map( 'map' ).setView( [30,-90], 4 );

var streets = L.tileLayer( 'http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo( map );

var satellite = L.tileLayer( 'http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}', {
	type: 'sat',
	ext: 'jpg',
	attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency',
	subdomains: '1234'
});

// NEW: create an object to hold the group of earthquake points
var featuregroup = L.layerGroup();

function addpopup( feature, layer ){
  var html = feature.properties.mag + " magnitude, " + feature.properties.place;
  layer.bindPopup( html );

  // NEW: add the current earthquake point to the group
  featuregroup.addLayer( layer );
}

$.getJSON( "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson", function( geojsonFeatures ){
  L.geoJson( geojsonFeatures, { onEachFeature: addpopup } ).addTo(map);
});

// NEW: add the group of earthquake points to the map.
featuregroup.addTo( map );

var baselayers = {
  "Streets": streets,
  "Satellite": satellite
};

var datalayers = {
  "Earthquakes": featuregroup
};

L.control.layers( baselayers, datalayers ).addTo( map );
