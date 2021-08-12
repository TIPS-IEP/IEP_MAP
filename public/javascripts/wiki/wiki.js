var dropClassList = document.getElementsByClassName("listener");
var toggleClassList = document.getElementsByClassName("toggle");
var ulList = document.getElementsByClassName("ulList");
var linkClassList = document.getElementsByClassName("link");
var firstLayerList = document.getElementsByClassName("firstLayerList");
var eachToggle = new Array();
var eachFirstLayerToggle = new Array();

class toggleClass {
  constructor(dropDiv, toggleDiv, linkDiv) {
    this.opened = new Boolean(false);
    this.toggleDiv = toggleDiv;
    this.linkDiv = linkDiv;
    this.dropDiv = dropDiv;
  }
}

function createToggle(){
  for(let i = 0; i < toggleClassList.length; i++){
    eachToggle.push(new toggleClass(dropClassList[i], toggleClassList[i], linkClassList[i]));
    if(dropClassList[i].className.split("listener ")[1] == "firstLayerList"){
      eachToggle[i].toggleDiv.style.display = "block";
      eachToggle[i].linkDiv.style.listStyle = "url('/images/icons/caret-down-fill.svg')";
      eachToggle[i].opened = true;
    }
    // console.log(dropClassList[i].className.split("listener ")[1])
    // break;
    dropClassList[i].addEventListener('click', function (event) {
      if(eachToggle[i].opened == false){
        eachToggle[i].toggleDiv.style.display = "block";
        eachToggle[i].linkDiv.style.listStyle = "url('/images/icons/caret-down-fill.svg')";
        eachToggle[i].opened = true;
      }else{
        eachToggle[i].toggleDiv.style.display = "none";
        eachToggle[i].linkDiv.style.listStyle = "url('/images/icons/caret-right-fill.svg')";
        eachToggle[i].opened = false;
      }
    });
  }
}

function openToggle(){
  eachToggle.push(new toggleClass(firstLayerList[i], toggleClassList[i], linkClassList[i]));
  for(let i = 0; i < firstLayerList.length; i++){
    firstLayerList[i].toggleDiv.style.display = "block";
    firstLayerList[i].linkDiv.style.listStyle = "url('/images/icons/caret-down-fill.svg')";
    firstLayerList7[i].opened = true;
  }
}

window.onload = function() {
  createToggle();
  document.getElementsByClassName("closeButton")[0].addEventListener('click', function (event) {
    closeMenu();
  });
  document.getElementsByClassName("menuOpen")[0].addEventListener('click', function (event) {
    openMenu();
  });
}

function closeMenu(){
  document.getElementsByClassName("menu")[0].classList.add("closeMenu");
  document.getElementsByClassName("menuOpen")[0].classList.add("openMenu");
}

function openMenu(){
  document.getElementsByClassName("menu")[0].classList.remove("closeMenu");
  document.getElementsByClassName("menuOpen")[0].classList.remove("openMenu");
}