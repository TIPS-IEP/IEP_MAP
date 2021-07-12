window.onload = function() {
  document.getElementsByClassName("animated-title")[0].setAttribute("style", "display:none;");
  var heroImg = new Image();
  heroImg.src = "images/hero/cover1.jpg";
  heroImg.onload = function(){
    document.getElementsByClassName("hero-image1")[0].style.opacity = "1";
    document.getElementsByClassName("animated-title")[0].setAttribute("style", "display:block;");
    document.getElementsByClassName("loadingDots")[0].style.display = "none";
  }
}