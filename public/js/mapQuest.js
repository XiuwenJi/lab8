function initMap() {
	// add your code here
L.mapquest.key = 'WReD5TMXNRCXmh91rk9mICApIKtAUvln';

// 'map' refers to a <div> element with the ID map
var map = L.mapquest.map('map', {
  center: [32.88, -117.236],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12

});
	L.marker([32.88, -117.236]).addTo(map);
}