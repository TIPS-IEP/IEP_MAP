// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    document.getElementById("navbar").style.padding = "7px 10px";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("navbar").style.opacity = "80%";

  } else {
    document.getElementById("navbar").style.padding = "25px 10px";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("navbar").style.opacity = "100%";
  }
}
