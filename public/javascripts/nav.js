$(document).ready(function() {
  var path = window.location.pathname.toString();
  if (screen.width > 600) {
    if(path == "/contact" || path == "/about" || path == "/board" || path == "/events" || path == "/share" || path == "/blog" || path == "/login" || path == "/wiki" || path == "/profile" || path == "/blog" || path == "/dashboard"){
      document.getElementById("z-index").style.display = "none";
    }
    else{
      document.getElementById("z-index").style.display= "contents";
    }
  }
});
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  if (screen.width < 600) {
  /* Open the sidenav */
    document.getElementById("mySidenav").style.height = "100vh";
    document.getElementById("mySidenav").style.paddingTop = "20vh";
    document.getElementById("mySidenav").style.width = "100vw";
    document.getElementById("hide").style.display = "none";
    document.getElementById("hide1").style.display = "none";
    document.getElementById("hide2").style.display = "none";
    document.getElementById("hide3").style.display = "none";
    document.getElementById("hide4").style.display = "none";
  } else {
    document.getElementById("mySidenav").style.left = "0px";
  }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  if (screen.width < 600) {
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("mySidenav").style.padding = "0px";
    document.getElementById("mySidenav").style.width = "100vw";
    document.getElementById("hide").style.display = "block";
    document.getElementById("hide1").style.display = "block";
    document.getElementById("hide2").style.display = "block";
    document.getElementById("hide3").style.display = "block";
    document.getElementById("hide4").style.display = "block";
    document.getElementById("hide5").style.display = "block";
  } else {
    document.getElementById("mySidenav").style.left = "-250px";

  }
}
function mouseDown() {
  document.getElementById("nav-div").style.backgroundColor = "#ddd";
  // document.getElementById("nav-logo").style.borderRadius = "20px";
}

function mouseUp() {
  document.getElementById("nav-div").style.backgroundColor = "";
  // document.getElementById("nav-logo").style.borderRadius = "0px";
}