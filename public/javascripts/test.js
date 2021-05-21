alert("hi");
let map;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 49.496675, lng: -102.65625}
  });

  var georssLayer = new google.maps.KmlLayer({
    url: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBe1QeUX_0RUClAA5hJjpXB6XKw7icJy3A&libraries=geometry&callback=initMap'
  });
  georssLayer.setMap(map);
}