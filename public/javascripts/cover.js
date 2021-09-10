$(document).ready(function() {
  var path = window.location.pathname.toString();
  var splitPath = path.split("/");
  console.log(splitPath)
  if(path=="/about"){
    document.getElementsByClassName("coverHero")[0].style.backgroundImage = "url('/images/hero/passionLedUsHere.jpeg')";
  }
  else if(path=="/wiki"){
    document.getElementsByClassName("coverHero")[0].style.backgroundImage = "url('/images/hero/passionLedUsHere.jpeg')";
  }
  else if(splitPath[1]=="blog"){
    document.getElementsByClassName("coverHero")[0].style.backgroundImage = "url('/images/hero/passionLedUsHere.jpeg')";
  }
  else if(path=="/writeblog"){
    document.getElementsByClassName("coverHero")[0].style.backgroundImage = "url('/images/hero/passionLedUsHere.jpeg')";
  }
  else if(path=="/dashboard"){
    document.getElementsByClassName("coverHero")[0].style.backgroundImage = "url('/images/hero/passionLedUsHere.jpeg')";
  }
  else if(path=="/join"){
    document.getElementsByClassName("coverHero")[0].style.backgroundImage = "url('/images/hero/passionLedUsHere.jpeg')";
  }
  else if(path=="/board"){
    document.getElementsByClassName("coverHero")[0].style.backgroundImage = "url('/images/hero/passionLedUsHere.jpeg')";
  }
  else if(path=="/share"){
    document.getElementsByClassName("coverHero")[0].style.backgroundImage = "url('/images/hero/passionLedUsHere.jpeg')";
  }
  else if(path=="/map"){
    document.getElementsByClassName("coverHero")[0].style.backgroundImage = "url('/images/hero/passionLedUsHere.jpeg')";
  }
  else if(path=="/events"){
    document.getElementsByClassName("coverHero")[0].style.backgroundImage = "url('/images/hero/passionLedUsHere.jpeg')";
  }
  else if(path=="/guides"){
    document.getElementsByClassName("coverHero")[0].style.backgroundImage = "url('/images/hero/passionLedUsHere.jpeg')";
  }
});
