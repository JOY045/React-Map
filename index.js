// Map Initialization
var map = L.map('map').setView([23.6850, 90.3563], 10);
// Map Initialization

// OSM Layer
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

osm.addTo(map);
// OSM Layer

// Map Theme

// Topo Map
// var topoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
// 	maxZoom: 20,
// 	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
// });

// topoMap.addTo(map);
// Topo Map

// World Imagery
// var worldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
// 	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
// });

// worldImagery.addTo(map);
// World Imagery

// Jawg Dark
// var jwagDark = L.tileLayer('https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
// 	attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// 	maxZoom: 20,
// });

// jwagDark.addTo(map);
// Jawg Dark

// Google Map
// Google Street
googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

googleStreets.addTo(map);
// Google Street

// Hybrid
googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

googleHybrid.addTo(map);
// Hybrid

// Satellite
googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

googleSat.addTo(map);
// Satellite

// Terrain
googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

googleTerrain.addTo(map);
// Terrain

// Note that difference in the "lyrs" parameter in the URL:

// Hybrid: s,h;
// Satellite: s;
// Streets: m;
// Terrain: p;

// Google Map

// Map Theme

// Marker
var myIcon = L.icon({
    iconUrl: 'images/location-icon.png',
    iconSize: [27, 40]
});

var bangladesh = L.marker([23.6850, 90.3563], { icon: myIcon, draggable: true});
var popUp = bangladesh.bindPopup('Welcome to Bangladesh!' + ' ' + bangladesh.getLatLng()).openPopup();

popUp.addTo(map);

var dhaka = L.marker([23.8103, 90.4125], { icon: myIcon, draggable: true });
var popUp = dhaka.bindPopup('Welcome to Dhaka!' + ' ' + dhaka.getLatLng())
// Marker

// GeoJSON
// console.log(marker.toGeoJSON());
// GeoJSON

// Layer Controller
var baseMaps = {
    "OSM": osm,
    "Google Streets": googleStreets,
    "Google Hybrid": googleHybrid,
    "Google Satellite": googleSat,
    "Google Terrain": googleTerrain
    // "Topo Map": topoMap,
    // "Jawg Dark": jwagDark
};

var overlayMaps = {
    "Bangladesh": bangladesh,
    "Dhaka": dhaka
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
// Layer Controller