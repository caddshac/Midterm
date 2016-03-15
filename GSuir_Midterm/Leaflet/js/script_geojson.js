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

//Include a WMS link, layer identifier, and attribute information
var EmergencyResponse = L.tileLayer.wms("http://services.nationalmap.gov/arcgis/services/structures/MapServer/WmsServer", {
		    	layers: '9',
		    	format: 'image/png',
		    	transparent: true,
		    	attribution: "Emergency Response Centers"
		}).addTo(map);
	
		
		
//Include a WMS link, layer identifier, and attribute information
var EmergencyResponse = L.tileLayer.wms("http://services.nationalmap.gov/arcgis/services/structures/MapServer/WmsServer", {
		    	layers: '10',
		    	format: 'image/png',
		    	transparent: true,
		    	attribution: "Law Enforcement"
		}).addTo(map);




//Include a WMS link, layer identifier, and attribute information
var Streams = L.tileLayer.wms("http://services.nationalmap.gov/arcgis/services/SmallScale1Million/SmallScaleHydrographyWMS/MapServer/WmsServer", {
			layers: '2',
			format: 'image/png',
			transparent: true,
			attribution: "Streams and Rivers"
		}).addTo(map);



/* Get GeoJSON data from an external website using jQuery's getJSON function.
	* function: getJSON
	* documentation: http://api.jquery.com/jquery.getjson*/
function myfunction(feature, layer) {
			  if (feature.properties) {
				var html = feature.properties.Name  + "<br>" + "<br>" + feature.properties.Caption +
				  '<a href=' + feature.properties.URL + '><img src="' + feature.properties.Thumb_URL + '"></a>';
				layer.bindPopup(html);
				}
		}


$.getJSON("http://caddshac.github.io/Midterm/GSuir_Midterm/Leaflet/Texas_Petro_Facilities.geojson", function( geojsonFeature ) {
	L.geoJson(geojsonFeature, {
	onEachFeature: myfunction}).addTo(map);


});



// NEW: add the group of facility points to the map.
featuregroup.addTo( map );

// Create an object with Layers for each basemap
var baselayers = {
  "Streets": streets,
  "Satellite": satellite
};

var overlays = {
	"Emergency Response Centers": EmergencyResponse,
	"Streams": Streams,
	"Petroleum Facilities": Facilities
};

L.control.layers(baseLayers, overlays).addTo(map);
