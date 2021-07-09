$(document).ready(function() {
  var path = window.location.pathname.toString();
  if (screen.width > 600) {
    if(path == "/" || path == "/about" || path == "/wiki" || path == "/iep"){
      document.getElementById("navContainer").style.display = "block";
    }
    else{
      document.getElementById("navContainer").style.display= "none";
    }
  }
});

$(document).ready(function() {
  var path = window.location.pathname.toString();
  if(path == "/"){
    document.getElementById("navbar").style.background = "none";
  }
});

window.addEventListener('scroll', function () {
  var path = window.location.pathname.toString();
  if(path == "/"){
    if (window.pageYOffset > 40) {
      document.getElementById("navbar").classList.add('bg-light', 'shadow');
    } 
    else {
      document.getElementById("navbar").classList.remove('bg-light', 'shadow');
    }
  } 
});

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    document.getElementById("navbar").style.padding = "7px 10px";
    document.getElementById("navbar-right").style.fontSize = "25px";
    document.getElementById("navbar").style.opacity = "85%";
  } 
  else {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("navbar-right").style.fontSize = "35px";
    document.getElementById("navbar").style.opacity = "100%";
  }
}


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
  }
}


function mouseDown() {
  document.getElementById("nav-div").style.backgroundColor = "#ddd";
}

function mouseUp() {
  document.getElementById("nav-div").style.backgroundColor = "";
}