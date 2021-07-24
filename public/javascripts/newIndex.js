var animationStarted = false;
window.onload = function() {
  
  var heroImg = new Image();
  heroImg.src = "images/hero/cover1.jpg";
  
  heroImg.onload = function(){
    document.getElementsByClassName("hero-image1")[0].style.opacity = "1";
    if(document.getElementsByClassName("hero-image1")[0].style.opacity == "1"){
      document.getElementsByClassName("animated-title")[0].setAttribute("style", "display:block;");
    }
  }
}