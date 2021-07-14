var animationStarted = false;
window.onload = function() {
  document.getElementsByClassName("loadingContainer")[0].style.display = "flex";
  setTimeout(function(){
    animationStarted = true;
  }, 75);
  var heroImg = new Image();
  heroImg.src = "images/hero/cover1.jpg";
  
  heroImg.onload = function(){
    if(animationStarted){
      $(".loadingDot:eq(2)").one('animationiteration AnimationIteration', function() {
        document.getElementsByClassName("loadingContainer")[0].style.display = "none";
        document.getElementsByClassName("hero-image1")[0].style.opacity = "1";
        document.getElementsByClassName("animated-title")[0].setAttribute("style", "display:block;");
      });
    }
    else{
      document.getElementsByClassName("loadingContainer")[0].style.display = "none";
      document.getElementsByClassName("hero-image1")[0].style.opacity = "1";
      document.getElementsByClassName("animated-title")[0].setAttribute("style", "display:block;");
    }
    
  }
}