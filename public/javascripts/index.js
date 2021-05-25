/* When the user scrolls down, hide the topnav. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topnav").style.top = "0";
  } 
  else {
    document.getElementById("topnav").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}