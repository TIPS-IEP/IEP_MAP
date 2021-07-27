$(document).ready(function() {
  var path = window.location.pathname.toString();
  if (screen.width < 600) {
    document.getElementById("navContainer").style.display= "block";
  }
});

window.addEventListener('scroll', function () {
  var path = window.location.pathname.toString();
  let logoImage = document.getElementsByClassName("logo-image")
  let navLogo = document.getElementsByClassName("nav-logo")
  let navOption = document.getElementsByClassName("navOption")
  let allDropdown = document.getElementsByClassName("allDropdown")
  let allDropdownContent = document.getElementsByClassName("all-dropdown-content")
  if (window.pageYOffset > 40) {
    document.getElementById("navbar").style.background = "rgb(29, 29, 29)";
    document.getElementById("navbar").style.padding = "7px 10px";
    document.getElementById("navbar-right").style.fontSize = "25px";
    document.getElementById("navbar").style.opacity = "85%";
    for (let i = 0; i < $('.navOption').length; i++) {
      navOption[i].setAttribute("style", "color: rgb(255, 255, 255)!important;");
    } 
    for (let i = 0; i < $('.navOption').length; i++) {
      navOption[i].addEventListener("mouseover", function( event ) {
        navOption[i].setAttribute("style", "color: rgb(255, 179, 37) !important;");
      }, false);
      navOption[i].addEventListener("mouseout", function( event ) {
        navOption[i].setAttribute("style", "color: white !important;");
      }, false);
    }

    for (let i = 0; i < $('.all-dropdown-content').length; i++) {
      allDropdownContent[i].setAttribute("style", "margin-top: 59px;");
    }

    for (let i = 0; i < $('.allDropdown').length; i++) {
      allDropdown[i].addEventListener("mouseover", function( event ) {
        allDropdown[i].setAttribute("style", "margin-bottom: 13px; padding-bottom: 3px; border-bottom: 4px solid rgb(255, 179, 37);");
      }, false);
      allDropdown[i].addEventListener("mouseout", function( event ) {
        allDropdown[i].setAttribute("style", "margin-bottom: 13px; padding-bottom: 7px;");
      }, false);
    }

    for (let i = 0; i < $('.logo-image').length; i++) {
      logoImage[i].setAttribute("style", "content: url('/images/logos/TIPS-logo6/cover.png')!important;");
    }
    for (let i = 0; i < $('.nav-logo').length; i++) {
      navLogo[i].setAttribute("style", "content: url('/images/hero/nav-white.png')!important;");
    }
    if(document.getElementById("sidenavSeperateLine")){
      document.getElementById("mySidenav").style.padding = "7px 10px";
      document.getElementById("sidenavSeperateLine").style.marginTop = "8px";
    }
    } 
  else {
    for (let i = 0; i < $('.allDropdown').length; i++) {
      allDropdown[i].addEventListener("mouseover", function( event ) {
        allDropdown[i].setAttribute("style", "margin-bottom: 0px; padding-bottom: 16px; border-bottom: 4px solid rgb(255, 179, 37);");
      }, false);
      allDropdown[i].addEventListener("mouseout", function( event ) {
        allDropdown[i].setAttribute("style", "margin-bottom: 0px; padding-bottom: 20px;");
      }, false);
    }

    for (let i = 0; i < $('.all-dropdown-content').length; i++) {
      allDropdownContent[i].setAttribute("style", "margin-top: 72px;");
    }
    if(path == "/"){
      document.getElementById("navbar").style.background = "none";
      for (let i = 0; i < $('.navOption').length; i++) {
        navOption[i].setAttribute("style", "color: rgb(0, 0, 0)!important;");
        navOption[i].addEventListener("mouseover", function( event ) {
          event.target.style.color = "white";
        }, false);
        navOption[i].addEventListener("mouseout", function( event ) {
          event.target.style.color = "";
        }, false);
      }

      for (let i = 0; i < $('.logo-image').length; i++) {
        logoImage[i].setAttribute("style", "content: url('/images/logos/TIPS-logo7/cover.png')!important;");
      }
      for (let i = 0; i < $('.nav-logo').length; i++) {
        navLogo[i].setAttribute("style", "content: url('/images/hero/nav.png')!important;");
      }
    }
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("navbar-right").style.fontSize = "25px";
    document.getElementById("navbar").style.opacity = "100%";
    if(document.getElementById("sidenavSeperateLine")){
      document.getElementById("mySidenav").style.padding = "20px 10px";
      document.getElementById("sidenavSeperateLine").style.marginTop = "22px";
    }  
  }
});

function openNav() {
  if (screen.width < 600) {
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

var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';



function mouseDown() {
  document.getElementsByClassName("nav-div")[0].setAttribute("style", "box-shadow: 0.1rem 0.15rem 0.3rem rgb(83 88 93 / 80%) !important;");

  if(document.getElementById("sidenavSeperateLine")){
    document.getElementsByClassName("nav-div")[1].style.backgroundColor = "#ddd";
  }
}

function mouseUp() {
  document.getElementsByClassName("nav-div")[0].removeAttribute("style", "box-shadow;");
  document.getElementsByClassName("nav-div")[0].style.backgroundColor = "";
  if(document.getElementById("sidenavSeperateLine")){
    document.getElementsByClassName("nav-div")[1].style.backgroundColor = "";
  }
}


function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
