var map = L.map('map').setView([38, -95], 5);

var streets = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
				attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

		}).addTo(map);

/*var ProductionFacilities = L.tileLayer.wms("http://certmapper.cr.usgs.gov/arcgis/rest/services/oilgas/US_cells0506/MapServer", {
		    layers: 'nexrad-n0r-900913',
		    format: 'image/png',
		    transparent: true,
		    attribution: "Production Facilities",
				opacity: 50
		}).addTo(map);*/


		// Include a WMS link, layer identifier, and attribute information
		var tornadowarnings = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/wwa_meteoceanhydro_shortduration_hazards_watches_time/MapServer/WMSServer", {
						layers: '2',
						format: 'image/png',
						transparent: true,
						attribution: "NOAA Warnings, Watches and Advisories"
				}).addTo(map);

		var FireStations = L.tileLayer.wms("http://services.nationalmap.gov/arcgis/services/structures/MapServer/WMSServer", {
					layers: '9',
					format: 'image/png',
					transparent: true,
					attribution: "Fire Stations"
				}).addTo(map);


		var LawEnforecment = L.tileLayer.wms("http://services.nationalmap.gov/arcgis/services/structures/MapServer/WMSServer", {
					layers: '10',
					format: 'image/png',
					transparent: true,
					attribution: "Law Enforcement",
				}).addTo(map);


// Create an object with Layers for each basemap
var baseLayers = {
				    "Streets": streets
				};

var overlays = {
				    /*"Facilities": ProductionFacilities,*/
				    "Fire Stations": FireStations,
						"Law Enforcement": LawEnforecment
				};

L.control.layers(baseLayers, overlays).addTo(map);
