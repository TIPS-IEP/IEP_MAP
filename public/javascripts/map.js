let map;
function initMap() {
  var x = 40;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: x, lng: -96.65625}
  });

  var features = [10];
  features[0]={
    position: new google.maps.LatLng(42.27656, -83.74256),
    type: "UniversityofMichigan",
  }

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

// var University = require('../models/universities');
// var Alumni = require('../models/Alumni');
// var Uni_count = University.count();
// var Uni_features = [Uni_count];
// var Uni_images = [Uni_count];
// var count = 0;
// University.findOne(function(err, university){
//   if(err) console.log(err);

//   Uni_features[count]={
//     position:new google.maps.LatLng(university.lat,university.lng),
//     type: count,
//   }
//   Uni_images[count]={
//     url:"images/universities/"+university.university+".png",
//     scaledSize: new google.maps.Size(30,32)
//   }
//   count++;
// })
