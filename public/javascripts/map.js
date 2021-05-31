
let map;
alert("hi");
//data_models
var University = require('../models/universities');
var Alumni = require('../models/Alumni');

var Uni_count = University.count();

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 40.496675, lng: -96.65625}
  });

  var Uni_features = [Uni_count];
  var Uni_images = [Uni_count];
  features[0]={
    position: new google.maps.LatLng(42.27656, -83.74256),
    type: "UniversityofMichigan",
  }
  var count = 0;
  University.findOne(function(err, university){
    if(err) console.log(err);

    Uni_features[count]={
      position:new google.maps.LatLng(university.lat,university.lng),
      type: count,
    }
    Uni_images[count]={
      url:"images/universities/"+university.university+".png",
      scaledSize: new google.maps.Size(30,32)
    }
    count++;
  })
  
  var image = {
    url: "images/universities/University of Michigan.png",
    scaledSize: new google.maps.Size(30,32)
  };
  const icons = {
    UniversityofMichigan: {
      icon: image,
      
    },
  };


  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
}