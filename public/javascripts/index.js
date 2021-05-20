let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -3.397, lng: 150.644 },
    zoom: 8,
  });
}