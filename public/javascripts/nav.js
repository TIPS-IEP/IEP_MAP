// $(document).ready(function() {
//   var path = window.location.pathname.toString();
//   if (screen.width > 600) {
//     if(path == "/contact" || path == "/about" || path == "/board" || path == "/events" || path == "/share" || path == "/blog" || path == "/login" || path == "/wiki" || path == "/profile" || path == "/blog" || path == "/dashboard"){
//       document.getElementById("z-index").style.display = "none";
//     }
//     else{
//       document.getElementById("z-index").style.display= "contents";
//     }
//   }
// });

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    document.getElementById("navbar").style.padding = "7px 10px";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("mySidenav").style.padding = "7px 10px";
    document.getElementById("sidenavSeperateLine").style.marginTop = "8px";
    document.getElementById("navbar").style.opacity = "87%";
  } else {
    document.getElementById("navbar").style.padding = "25px 10px";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("mySidenav").style.padding = "25px 10px";
    document.getElementById("sidenavSeperateLine").style.marginTop = "25px";
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
  } else {
    document.getElementById("mySidenav").style.left = "0px";
    disableScroll();
    document.getElementById("overlay").style.display = "block";
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
    document.getElementById("mySidenav").style.left = "-260px";
    enableScroll();
    document.getElementById("overlay").style.display = "none";
  }
}

//sideNav Controls Start

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
//sideNav Controls End

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';


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

function mouseDown() {
  document.getElementById("nav-div").style.backgroundColor = "#ddd";
  // document.getElementById("nav-logo").style.borderRadius = "20px";
}

function mouseUp() {
  document.getElementById("nav-div").style.backgroundColor = "";
  // document.getElementById("nav-logo").style.borderRadius = "0px";
}