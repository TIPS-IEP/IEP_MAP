function showBlogType(type){
  for(j=0;j<$('.BLink').length;j++){
    document.getElementsByClassName("typeB")[j].classList.add("displayN");
    document.getElementsByClassName("typeB")[j].classList.remove("appear");
  }
  document.getElementsByClassName("typeB")[type].classList.remove("displayN");
  setTimeout(function(){ document.getElementsByClassName("typeB")[type].classList.add("appear"); }, 50);
}