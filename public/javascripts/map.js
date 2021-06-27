var features = [];
var image = [];
var icons = [];


async function importDataToList(){
  for(var i = 0; i < universitiesLength; i++){
    features[i] = {
      type: i,
      position: new google.maps.LatLng(universitiesObject.universityLat[i], universitiesObject.universityLng[i]),
    };
    const img = new Image();
    img.src = 'images/universities/'+universitiesObject.universityName[i]+'.png';
    image[i] = {
      url: "images/universities/"+universitiesObject.universityName[i]+".png",
      scaledSize: new google.maps.Size(img.width/Math.sqrt(img.width*img.height/1200),img.height/Math.sqrt(img.width*img.height/1200))
    };
    icons[i] = {
      icon: image[i],
    };
  }
}

async function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 42, lng: -96.65625}
  });
  importDataToList();
  for (var k = 0; k < universitiesLength; k++) {
    const marker = new google.maps.Marker({
      position: features[k].position,
      icon: icons[k].icon,
      map: map,
    });
    marker.addListener("click", () => {
      map.setZoom(8);
      map.setCenter(marker.getPosition());
    });
  }
  createUniversitiesSearchList (map);
}

function createUniversitiesSearchList(map){
  for(var i = 0; i < universitiesLength; i++){
    var alumniListDiv = document.createElement("div");
    alumniListDiv.classList.add("container-fluid","alumniList");
    alumniListDiv.id = i;
    var div = document.createElement("div");
    div.classList.add("universityBlock");
    div.id = (1000+i);//1000 is just a space
    div.innerHTML = universitiesObject.universityName[i];
    div.addEventListener('click', function (event) {
      if(document.getElementById(this.id-1000).style.display!="block"){
        document.getElementById(this.id-1000).style.display = "block";
        map.setZoom(8);
        map.setCenter(features[this.id-1000].position);
      }
      else{
        document.getElementById(this.id-1000).style.display = "none";
      }
    });
    document.getElementById("universityList").appendChild(div);
    document.getElementById("universityList").appendChild(alumniListDiv);
    

    var alumniCount = 0;
    for(let j = 0; j < alumniObject.alumniLength; j++){
      if(alumniObject.alumniUniversity[j] == universitiesObject.universityName[i]){
        var newDiv = document.createElement("div");
        var arrowDownNew = document.createElement('img');
        var newDivArrowDownDiv = document.createElement("div");
        arrowDownNew.src = "images/icons/arrow_right.png";
        arrowDownNew.setAttribute("height", "20");
        arrowDownNew.setAttribute("width", "20");
        newDivArrowDownDiv.classList.add("col-md-2", "arrowDown");
        var newDivTextDiv = document.createElement("div");
        newDiv.id = alumniObject.alumniEnglishName[j];
        newDivTextDiv.innerHTML = alumniObject.alumniEnglishName[j];
        newDivTextDiv.classList.add("col-md-10", "alumniName");
        newDiv.classList.add("alumniBlock", "row");
        var time = (300+alumniCount*60)+"ms";
        newDiv.style.animation = "rotateX "+time+" ease-in-out forwards";
        newDiv.appendChild(newDivTextDiv);
        newDivArrowDownDiv.appendChild(arrowDownNew);
        newDiv.appendChild(newDivArrowDownDiv);
        newDiv.addEventListener('click', function(event){
          alumniProfileOpen(this.id);
        })
        document.getElementById(i).appendChild(newDiv);
        alumniCount++;
      }
    }
  }
}
function alumniProfileOpen(alumniName){
  var nameDiv = document.createElement("div");
  nameDiv.innerHTML = alumniName;
  document.getElementById("alumniProfile").appendChild(nameDiv);
  document.getElementById("alumniProfile").style.display = "block";
  document.getElementById("alumniProfile").style.left = "0%";
}
function alumniProfileClose(){
  document.getElementById("alumniProfile").style.display = "none";
}
function refresh(){
  window.location = window.location + '#loaded';
  window.location.reload();
}


window.onload = function() {
  document.getElementById("z-index").style.display = "none";
  if(!window.location.hash) {
    window.location = window.location + '#loaded';
    window.location.reload();
  }
  var biggestImg = new Image();
  biggestImg.src = "images/universities/Carnegie Mellon University.png";
  biggestImg.onload = function(){
    if(!window.location.hash) {
      refresh();
    }
  }  
}
