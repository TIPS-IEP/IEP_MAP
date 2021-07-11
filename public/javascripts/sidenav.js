window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    document.getElementById("mySidenav").style.padding = "7px 10px";
    document.getElementById("sidenavSeperateLine").style.marginTop = "8px";
    document.getElementById("navbar").style.padding = "7px 10px";
    document.getElementById("navbar-right").style.fontSize = "25px";
    document.getElementById("navbar").style.opacity = "100%";
  } else {
    document.getElementById("mySidenav").style.padding = "20px 10px";
    document.getElementById("sidenavSeperateLine").style.marginTop = "20px";
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("navbar-right").style.fontSize = "35px";
    document.getElementById("navbar").style.opacity = "100%";
  }
}

// window.addEventListener('scroll', function () {
//   if (window.pageYOffset > 40) {
//     // document.getElementById("navbar").classList.add('bg-light', 'shadow');
//     document.getElementById("mySidenav").style.padding = "7px 10px";
//     document.getElementById("sidenavSeperateLine").style.marginTop = "8px";
//     document.getElementById("navbar").style.background = "rgb(234, 240, 242)";
//     document.getElementById("navbar").style.padding = "7px 10px";
//     document.getElementById("navbar-right").style.fontSize = "25px";
//     document.getElementById("navbar").style.opacity = "100%";
//   } 
//   else {
//     // document.getElementById("navbar").classList.remove('bg-light', 'shadow');
//     document.getElementById("mySidenav").style.padding = "7px 10px";
//     document.getElementById("sidenavSeperateLine").style.marginTop = "8px";
//     document.getElementById("navbar").style.background = "none";
//     document.getElementById("navbar").style.padding = "20px 10px";
//     document.getElementById("navbar-right").style.fontSize = "35px";
//     document.getElementById("navbar").style.opacity = "100%";
//   }
// });


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  if (screen.width > 600) {
    document.getElementById("mySidenav").style.left = "0px";
    disableScroll();
    document.getElementById("overlay").style.display = "block";
  }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  if (screen.width > 600) {
    document.getElementById("mySidenav").style.left = "-260px";
    enableScroll();
    document.getElementById("overlay").style.display = "none";
  }
}

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
