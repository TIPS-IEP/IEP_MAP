
/* Control z-index*/
window.onload = function displayzIndex(){
  var path = window.location.pathname.toString();
  if(path == "/contact" || path == "/about" || path == "/board" || path == "/events" || path == "/share"){
    document.getElementById("z-index").style.display = "none";
  }
  else{
    document.getElementById("z-index").style.display= "contents";
  }
}
