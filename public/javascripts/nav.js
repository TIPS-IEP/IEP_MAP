$(document).ready(function() {
  var path = window.location.pathname.toString();
  if (screen.width > 600) {
    if(path == "/contact" || path == "/about" || path == "/board" || path == "/events" || path == "/share" || path == "/blog" || path == "/login"){
      document.getElementById("z-index").style.display = "none";
    }
    else{
      document.getElementById("z-index").style.display= "contents";
    }
  }
});
