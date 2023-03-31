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
// 	maxZoom: 5,
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

// Google Map
// Google Street
googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

googleStreets.addTo(map);
// Google Street

// Hybrid
// googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
//     maxZoom: 20,
//     subdomains:['mt0','mt1','mt2','mt3']
// });

// googleHybrid.addTo(map);
// Hybrid

// Satellite
// googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
//     maxZoom: 20,
//     subdomains:['mt0','mt1','mt2','mt3']
// });

// googleSat.addTo(map);
// Satellite

// Terrain
// googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
//     maxZoom: 20,
//     subdomains:['mt0','mt1','mt2','mt3']
// });

// googleTerrain.addTo(map);
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

var marker = L.marker([23.6850, 90.3563], { icon: myIcon, draggable: true});
var popUp = marker.bindPopup('Welcome to Bangladesh!').openPopup();

popUp.addTo(map);
// Marker