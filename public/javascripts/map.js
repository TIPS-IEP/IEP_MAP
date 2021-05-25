alert("hi");
let map;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 40.496675, lng: -96.65625}
  });
const icons = {
  UofM: {
    icon: "images/UofM.png",
    
  },
};
const features = [
  {
    position: new google.maps.LatLng(42.27656, -83.74256),
    type: "UofM",
  },
];

// Create markers.
for (let i = 0; i < features.length; i++) {
  const marker = new google.maps.Marker({
    position: features[i].position,
    icon: icons[features[i].type].icon,
    scaledSize : new google.maps.Size(2, 30),
    map: map,
  });
}
}