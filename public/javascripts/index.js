// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    document.getElementById("navbar").style.padding = "7px 10px";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("z-index").style.fontSize = "32px";
    document.getElementById("navbar").style.opacity = "80%";

  } else {
    document.getElementById("navbar").style.padding = "25px 10px";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("z-index").style.fontSize = "33px";
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
    document.getElementById("mySidenav").style.height = "100vh";
    document.getElementById("mySidenav").style.width = "230px";
    document.getElementById("main").style.marginLeft = "230px";
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
  } else {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("hide").style.display = "block";
    document.getElementById("hide1").style.display = "block";
    document.getElementById("hide2").style.display = "block";
    document.getElementById("hide3").style.display = "block";
    document.getElementById("hide4").style.display = "block";  
  }
}
/* Set the card of our features to the same height*/
// window.onload = function() {
  // if (document.getElementsByClassName("container2")[0].style.height > "199px" ) {
//     (document.getElementsByClassName("innerContainer")[0].style.width = "100%" );
//     (document.getElementsByClassName("innerContainer")[1].style.width = "100%" );
//     (document.getElementsByClassName("innerContainer")[2].style.width = "100%" );
//     (document.getElementsByClassName("innerContainer")[3].style.width = "100%" );

//     (document.getElementsByClassName("customContainer")[0].style.width = "82%" );
//     (document.getElementsByClassName("customContainer")[1].style.width = "82%" );
//     (document.getElementsByClassName("customContainer")[2].style.width = "82%" );
//     (document.getElementsByClassName("customContainer")[3].style.width = "82%" );
// }