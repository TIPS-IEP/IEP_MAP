var animationStarted = false;
window.onload = function() {
  document.getElementsByClassName("loadingContainer")[0].style.display = "flex";
  setTimeout(function(){
    animationStarted = true;
    console.log("time");
  }, 75);
  var heroImg = new Image();
  heroImg.src = "images/hero/cover1.jpg";
  
  heroImg.onload = function(){
    console.log("0");
    if(animationStarted){
      $(".loadingDot:eq(2)").one('animationiteration AnimationIteration', function() {
        document.getElementsByClassName("loadingContainer")[0].style.display = "none";
        document.getElementsByClassName("hero-image1")[0].style.opacity = "1";
        document.getElementsByClassName("animated-title")[0].setAttribute("style", "display:block;");
        console.log("1");
      });
      console.log("2");
    }
    else{
      console.log("3");
      document.getElementsByClassName("loadingContainer")[0].style.display = "none";
      document.getElementsByClassName("hero-image1")[0].style.opacity = "1";
      document.getElementsByClassName("animated-title")[0].setAttribute("style", "display:block;");
    }
    
  }
}