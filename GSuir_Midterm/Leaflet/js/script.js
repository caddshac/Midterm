// Create a map object and specify the center lat/lon and zoom level
var map = L.map('map').setView([33.8, -98.68], 10);

// Include a basemap layer for this webservice
var MapQuestOpen_Aerial = L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}', {
	type: 'sat',
	ext: 'jpg',
	attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency',
	subdomains: '1234'

		}).addTo(map);

// Include a WMS link, layer identifier, and attribute information
var EmergencyResponse = L.tileLayer.wms("http://services.nationalmap.gov/arcgis/services/structures/MapServer/WmsServer?", {
		    layers: '7',
		    format: 'image/png',
		    transparent: true,
		    attribution: "Emergency Response Centers"
		}).addTo(map);

//Include a WMS link, layer identifier, and attribute information
var Streams = L.tileLayer.wms("http://services.nationalmap.gov/arcgis/services/SmallScale1Million/SmallScaleHydrographyWMS/MapServer/WmsServer?", {
				layers: '2',
				format: 'image/png',
				transparent: true,
				attribution: "Streams and Rivers"
		}).addTo(map);

/* Include a WMS link, layer identifier, and attribute information
var Facilities = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_relhumidity_offsets/MapServer/WMSServer", {
				layers: '1',
				format: 'image/png',
				transparent: true,
				attribution: "Petroleum Facilities",
				opacity: 0.25
		}).addTo(map);*/


// Create an object with Layers for each basemap
var baseLayers = {
				    "MapQuestOpen_Aerial": MapQuestOpen_Aerial
				};

var overlays = {
				    "Emergency Response Centers": EmergencyResponse,
				    "Streams": Streams,
						"Petroleum Facilities": Facilities
				};

L.control.layers(baseLayers, overlays).addTo(map);
