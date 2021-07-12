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

window.addEventListener('scroll', function () {
  var path = window.location.pathname.toString();
  if (window.pageYOffset > 40) {
    // document.getElementById("navbar").classList.add('bg-light', 'shadow');
    document.getElementById("navbar").style.background = "rgb(29, 29, 29)";
    document.getElementById("navbar").style.padding = "7px 10px";
    document.getElementById("navbar-right").style.fontSize = "25px";
    document.getElementById("navbar").style.opacity = "85%";
    for (let i = 0; i < 6; i++) {
      document.getElementsByClassName("navOption")[i].setAttribute("style", "color: rgb(255, 255, 255)!important;");
    }    
    if(document.getElementById("sidenavSeperateLine")){
      document.getElementById("mySidenav").style.padding = "7px 10px";
      document.getElementById("sidenavSeperateLine").style.marginTop = "8px";
    }
  } 
  else {
    if(path == "/"){
      document.getElementById("navbar").style.background = "none";
      // for (let i = 0; i < 6; i++) {
      //   document.getElementsByClassName("navOption")[i].style.color = "rgb(0, 0, 0)";
      // }
      for (let i = 0; i < 6; i++) {
        document.getElementsByClassName("navOption")[i].setAttribute("style", "color: rgb(0, 0, 0)!important;");
      }
    }
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("navbar-right").style.fontSize = "35px";
    document.getElementById("navbar").style.opacity = "100%";
    if(document.getElementById("sidenavSeperateLine")){
      document.getElementById("mySidenav").style.padding = "20px 10px";
      document.getElementById("sidenavSeperateLine").style.marginTop = "20px";
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
  }
  else {
    if(document.getElementById("mySidenav")){
      document.getElementById("mySidenav").style.left = "0px";
      disableScroll();
      document.getElementById("overlay").style.display = "block";
    }
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
  else {
    if(document.getElementById("sidenavSeperateLine")){
      document.getElementById("mySidenav").style.left = "-260px";
      enableScroll();
      document.getElementById("overlay").style.display = "none";
    }
  }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';



function mouseDown() {
  document.getElementsByClassName("nav-div")[0].style.backgroundColor = "#ddd";
  if(document.getElementById("sidenavSeperateLine")){
    document.getElementsByClassName("nav-div")[1].style.backgroundColor = "#ddd";
  }
}

function mouseUp() {
  document.getElementsByClassName("nav-div")[0].style.backgroundColor = "";
  if(document.getElementById("sidenavSeperateLine")){
    document.getElementsByClassName("nav-div")[1].style.backgroundColor = "";
  }
}


// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
