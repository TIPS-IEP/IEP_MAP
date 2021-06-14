window.onload = function displayzIndex(){
  var path = window.location.pathname.toString();
  if(path == "/contact"){
    document.getElementById("z-index").style.display = "none";
  }
  else{
    document.getElementById("z-index").style.display= "contents";
  }
}