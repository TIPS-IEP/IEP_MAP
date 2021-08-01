let logoImage = document.getElementsByClassName("logo-image");
let navLogo = document.getElementsByClassName("nav-logo");
let navOption = document.getElementsByClassName("navOption");
let allDropdown = document.getElementsByClassName("allDropdown");
let myDropdown = document.getElementsByClassName("myDropdown");
let allDropdownContent = document.getElementsByClassName("all-dropdown-content");
let nav = document.getElementById("navbar");
var path = window.location.pathname.toString();

$(document).ready(function() {
  scrollUpSetUp();
  if (screen.width < 600) {
    document.getElementById("navContainer").style.display= "block";
  }
});

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 40) {
    navbarScrollDown();
    navOptionScrollDown();
    navOptionScrollDownHover();
    dropScrollDown();
    dropContentScrollDown();
    logoScrollDown();
  } else {
    scrollUpSetUp();
  }
});

function scrollUpSetUp(){
  dropScrollUp();
  dropContentScrollUp();
  navbarScrollUp();
  navOptionScrollUpHover();

  if(path == "/"){
    document.getElementById("navbar").style.background = "none";
    homeNavOptionScrollUp();
    homeNavOptionScrollUpHover();
    homelogoScrollUp();
  }
}

function homelogoScrollUp(){
  for (let i = 0; i < $('.logo-image').length; i++) {
    logoImage[i].setAttribute("style", "content: url('/images/logos/TIPS-logo7/cover.png')!important;");
  }
  for (let i = 0; i < $('.nav-logo').length; i++) {
    navLogo[i].setAttribute("style", "content: url('/images/hero/nav.png')!important;");
  }
}

function homeNavOptionScrollUpHover(){
  for (let i = 0; i < $('.myDropdown').length; i++) {
    myDropdown[i].addEventListener("mouseover", function( event ) {
      navOption[i].setAttribute("style", "color: white !important;");
    }, false);
    myDropdown[i].addEventListener("mouseout", function( event ) {
      navOption[i].setAttribute("style", "color: black !important;");
    }, false);
  }
}

function homeNavOptionScrollUp(){
  for (let i = 0; i < $('.navOption').length; i++) {
    navOption[i].setAttribute("style", "color: black;");
  }
}

function navbarScrollUp(){
  document.getElementById("navbar").style.padding = "20px 10px";
  document.getElementById("navbar-right").style.fontSize = "25px";
  document.getElementById("navbar").style.opacity = "100%";
}

function navOptionScrollUpHover(){
  for (let i = 0; i < $('.myDropdown').length; i++) {
    myDropdown[i].addEventListener("mouseover", function( event ) {
      navOption[i].setAttribute("style", "color: rgb(255, 179, 37) !important;");
    }, false);
    myDropdown[i].addEventListener("mouseout", function( event ) {
      navOption[i].setAttribute("style", "color: white !important;");
    }, false);
  }
}

function dropScrollUp(){
  for (let i = 0; i < $('.allDropdown').length; i++) {
    allDropdown[i].addEventListener("mouseover", function( event ) {
      allDropdown[i].setAttribute("style", "margin-bottom: 0px; padding-bottom: 16px; border-bottom: 4px solid rgb(255, 179, 37);");
    }, false);
    allDropdown[i].addEventListener("mouseout", function( event ) {
      allDropdown[i].setAttribute("style", "margin-bottom: 0px; padding-bottom: 20px;");
    }, false);
  }
}

function dropContentScrollUp(){
  for (let i = 0; i < $('.all-dropdown-content').length; i++) {
    allDropdownContent[i].setAttribute("style", "margin-top: 72px;");
  }
}

function navbarScrollDown(){
  nav.style.background = "rgb(29, 29, 29)";
  nav.style.padding = "7px 10px";
  nav.style.opacity = "85%";
  document.getElementById("navbar-right").style.fontSize = "25px";
}

function navOptionScrollDown(){
  for (let i = 0; i < $('.navOption').length; i++) {
    navOption[i].setAttribute("style", "color: rgb(255, 255, 255)!important;");
  }
}

function navOptionScrollDownHover(){
  for (let i = 0; i < $('.myDropdown').length; i++) {
    myDropdown[i].addEventListener("mouseover", function( event ) {
      navOption[i].setAttribute("style", "color: rgb(255, 179, 37) !important;");
    }, false);
    myDropdown[i].addEventListener("mouseout", function( event ) {
      navOption[i].setAttribute("style", "color: white !important;");
    }, false);
  }
}

function logoScrollDown(){
  for (let i = 0; i < $('.logo-image').length; i++) {
    logoImage[i].setAttribute("style", "content: url('/images/logos/TIPS-logo6/cover.png')!important;");
  }
  for (let i = 0; i < $('.nav-logo').length; i++) {
    navLogo[i].setAttribute("style", "content: url('/images/hero/nav-white.png')!important;");
  }
}

function dropScrollDown(){
  for (let i = 0; i < $('.allDropdown').length; i++) {
    allDropdown[i].addEventListener("mouseover", function( event ) {
      allDropdown[i].setAttribute("style", "margin-bottom: 13px; padding-bottom: 3px; border-bottom: 4px solid rgb(255, 179, 37);");
    }, false);
    allDropdown[i].addEventListener("mouseout", function( event ) {
      allDropdown[i].setAttribute("style", "margin-bottom: 13px; padding-bottom: 7px;");
    }, false);
  }
}

function dropContentScrollDown(){
  for (let i = 0; i < $('.all-dropdown-content').length; i++) {
    allDropdownContent[i].setAttribute("style", "margin-top: 59px;");
  }
}

//mbsidenav
function openNav() {
  if (screen.width < 600) {
    document.getElementById("mySidenav").style.height = "100vh";
    document.getElementById("mySidenav").style.paddingTop = "15vh";
    document.getElementById("mySidenav").style.width = "100vw";
    disableScroll();
  }
}

function closeNav() {
  if (screen.width < 600) {
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("mySidenav").style.padding = "0px";
    document.getElementById("mySidenav").style.width = "100vw";
    enableScroll();
  }
}
function mouseDown() {
  document.getElementsByClassName("nav-div")[0].setAttribute("style", "box-shadow: 0.1rem 0.15rem 0.3rem rgb(83 88 93 / 80%) !important;");
}
function mouseUp() {
  document.getElementsByClassName("nav-div")[0].removeAttribute("style", "box-shadow;");
  document.getElementsByClassName("nav-div")[0].style.backgroundColor = "";
}

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';


function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}