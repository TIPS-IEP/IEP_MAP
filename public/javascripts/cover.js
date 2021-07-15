$(document).ready(function() {
  var path = window.location.pathname.toString();
  if(path=="/about"){
    document.getElementsByClassName("coverHero")[0].style.backgroundImage = "url('images/hero/passionLedUsHere.jpeg')";
  }
  else if(path=="/wiki"){
    document.getElementsByClassName("coverHero")[0].style.backgroundImage = "url('images/hero/passionLedUsHere.jpeg')";
  }
  else if(path=="/blog"){
    document.getElementsByClassName("coverHero")[0].style.backgroundImage = "url('images/hero/passionLedUsHere.jpeg')";
  }
});
