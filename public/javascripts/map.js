/* Set the width of the sidebar to 250px (show it) */
function opensideShow() {
  document.getElementById("sideShow").style.width = "300px";
  document.getElementById("map").style.marginLeft = "300px";
  document.getElementById("allUniversity").style.width = "0px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closesideShow() {
  document.getElementById("sideShow").style.width = "0";
  document.getElementById("map").style.marginLeft = "0";
  document.getElementById("allUniversity").style.width = "30%";
}