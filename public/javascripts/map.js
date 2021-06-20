/* Set the width of the sidebar to 250px (show it) */
function opensideShow() {
  document.getElementById("sideShow").style.display = "inline-block";
  document.getElementById("allUniversity").style.display = "none";
}

/* Set the width of the sidebar to 0 (hide it) */
function closesideShow() {
  document.getElementById("sideShow").style.display = "none";
  document.getElementById("allUniversity").style.display = "inline-block";
}