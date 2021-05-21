alert("hi");
let map;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 40.496675, lng: -96.65625}
  });
  var georssLayer = new google.maps.KmlLayer({
    url: 'https://www.google.com/maps/d/u/0/kml?mid=1sItIYWAALKvp2787yj9uxeYB3rQGoJi1'
    zoom: 4,
    center: {lat: 40.496675, lng: -96.65625}
  });
  georssLayer.setMap(map);
  // var map = new google.maps.Map(document.getElementById('map'), {
  //   zoom: 4,
  //   center: {lat: 40.496675, lng: -96.65625}
  // });
}