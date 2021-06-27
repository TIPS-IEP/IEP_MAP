var dropClassList = document.getElementsByClassName("listener");
var toggleClassList = document.getElementsByClassName("toggle");
var ulList = document.getElementsByClassName("ulList");
var linkClassList = document.getElementsByClassName("link");
var eachToggle = new Array();

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

window.onload = function() {
  createToggle()
}



// function extendToggle() {
//   if(opened == false){
//     document.getElementById("toggle").style.display = "block";
//     opened = true;
//   }else{
//     document.getElementById("toggle").style.display = "none";
//     opened = false;
//   }
// }