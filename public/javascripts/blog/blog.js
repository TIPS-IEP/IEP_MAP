var blogDiv = document.getElementsByClassName("blogDiv");

window.onload = blogDivSetUp();

function showBlogType(type){
  for(j=0;j<$('.BLink').length;j++){
    document.getElementsByClassName("typeB")[j].classList.add("displayN");
    document.getElementsByClassName("typeB")[j].classList.remove("appear");
  }
  document.getElementsByClassName("typeB")[type].classList.remove("displayN");
  setTimeout(function(){ document.getElementsByClassName("typeB")[type].classList.add("appear"); }, 50);
}

function blogDivSetUp(){
  for(var i = 0; i < blogDiv.length; i++){
    blogDiv[0].addEventListener('onclick', function (event) {
      location.href = '/blog/' + blogDiv[0].id+ '/view';
    })
  }
}


