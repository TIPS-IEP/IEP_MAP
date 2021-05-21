alert("hi");
let map;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 49.496675, lng: -102.65625}
  });

  var georssLayer = new google.maps.KmlLayer({
    url: 'https://www.google.com/maps/d/u/0/embed?mid=1sItIYWAALKvp2787yj9uxeYB3rQGoJi1'
  });
  georssLayer.setMap(map);
}