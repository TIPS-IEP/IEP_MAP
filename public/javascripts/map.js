var features = [];
var image = [];
var icons = [];
//detect imput change
x = {
  aInternal: "",
  aListener: function(val) {},
  set a(val) {
    this.aInternal = val;
    this.aListener(val);
  },
  get a() {
    return this.aInternal;
  },
  registerListener: function(listener) {
    this.aListener = listener;
  }
}

async function importDataToList(){
  for(var i = 0; i < universitiesLength; i++){
    features[i] = {
      type: i,
      position: new google.maps.LatLng(universitiesObject.universityLat[i], universitiesObject.universityLng[i]),
    };
    const img = new Image();
    img.src = 'images/universities/'+universitiesObject.universityName[i]+'.png';
    // console.log(universitiesObject.universityName[i])
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
  for(var alumniNumber=0; alumniNumber<alumniObject.alumniUniversity.length; alumniNumber++){
    var found = false;
    for(universityNumber=0;universityNumber<universitiesLength; universityNumber++){
      if(alumniObject.alumniUniversity[alumniNumber]==universitiesObject.universityName[universityNumber]){
        found = true;
      }
    }
    if(!found){
      console.log("Can't find \"" + alumniObject.alumniUniversity[alumniNumber]+"\" in university collection!!!");
    }
  }
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 42, lng: -96.65625}
  });
  importDataToList();
  const inputBox = document.getElementById("input");
  
  for (var k = 0; k < universitiesLength; k++) {
    const marker = new google.maps.Marker({
      position: features[k].position,
      icon: icons[k].icon,
      map: map,
      name: universitiesObject.universityName[k]
    });
    marker.addListener("click", () => {
      map.setZoom(8);
      map.setCenter(marker.getPosition());
      x.a = marker.get('name');
      inputBox.value = x.a;
      
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
    div.innerHTML = "&nbsp"+universitiesObject.universityName[i];
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
        arrowDownNew.setAttribute("height", "0");
        arrowDownNew.setAttribute("width", "0");
        newDivArrowDownDiv.classList.add("col-md-2", "arrowDown");
        var newDivTextDiv = document.createElement("div");
        newDiv.id = "alumni"+j;
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
function alumniProfileOpen(alumniIndex){
  var index = parseInt(alumniIndex.slice(6));
  document.getElementById("profileTitle").innerHTML = alumniObject.alumniEnglishName[index];
  // document.getElementsByClassName("card-text")[0].innerHTML = " ";
  // "👤&nbsp English Name: " + alumniObject.alumniEnglishName[index];
  document.getElementsByClassName("card-text")[0].innerHTML = "📫&nbsp Email: " + alumniObject.alumniEmail[index];
  document.getElementsByClassName("card-text")[1].innerHTML = "📷&nbsp Instagram Account: " + alumniObject.alumniInstagramUsername[index];
  document.getElementsByClassName("card-text")[2].innerHTML = "👩‍🎓&nbsp Graduation Year: " + alumniObject.alumniGraduationYear[index];
  document.getElementsByClassName("card-text")[3].innerHTML = "📚&nbsp Major: " + alumniObject.alumniMajor[index];
  document.getElementsByClassName("card-text")[4].innerHTML = "🏫&nbsp University: " + alumniObject.alumniUniversity[index];
  document.getElementById("alumniProfile").style.display = "block";
  document.getElementById("alumniProfile").style.left = "0%";
  document.getElementById("universityList").style.display = "none";
}
function alumniProfileClose(){
  document.getElementById("alumniProfile").style.display = "none";
  document.getElementById("universityList").style.display = "block";
}
function refresh(){
  window.location = window.location + '#loaded';
  window.location.reload();
}


window.onload = function() {
  if(window.screen.width<600){
    var containerHeight = 1050;
    document.getElementById("bodyContainer").style.height = containerHeight+"px";
  }
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
