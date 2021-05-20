let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("myMap"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 0.2,
  });
}