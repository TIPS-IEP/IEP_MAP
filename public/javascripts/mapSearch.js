// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
// if user press any key and release
var userData = "";
inputBox.onkeyup = (e)=>{
  userData = e.target.value; //user enetered data
  let emptyArray = [];
  if(userData){
    for(var i = 0; i < universitiesLength; i++){
      for(j = 0; j < universitiesLength; j++){
        if(universitiesObject.universityName[i].toLocaleLowerCase().startsWith(userData.toLocaleLowerCase(),j)){
          emptyArray.push(universitiesObject.universityName[i]);
          break;
        }
      }
    }
    emptyArray = emptyArray.map((data)=>{
        // passing return data inside li tag
        return data = `${data}`;
    });
    searchWrapper.classList.add("active"); //show autocomplete box
    showSuggestions(emptyArray);
  }else{
      searchWrapper.classList.remove("active"); //hide autocomplete box
  }
  if(emptyArray==""){
    //display not found
    for(i=0;i<universitiesLength;i++){
      document.getElementsByClassName("universityBlock")[i].style.display = "block";
    }
    if(userData != ""){
      document.getElementById("universityNotFound").style.display = "block";
    }
    else{
      document.getElementById("universityNotFound").style.display = "none";
    }
  }
  else{
      document.getElementById("universityNotFound").style.display = "none";
  }
  
}
function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    searchWrapper.classList.remove("active");
}
function showSuggestions(list){
  var showTrue = [];
  for(j=0;j<universitiesLength;j++){
    showTrue.push(false);
  }
  for(i in list){
    for(j=0;j<universitiesLength;j++){
      if(universitiesObject.universityName[j]==list[i]){
        showTrue[j] = true;
        continue;
      }
    }
  }
  for(j=0;j<universitiesLength;j++){
    if(showTrue[j]){
      document.getElementsByClassName("universityBlock")[j].style.display = "true";
    }
    else{
      document.getElementsByClassName("universityBlock")[j].style.display = "none";
      document.getElementsByClassName("alumniList")[j].style.display = "none";
    }
  }
}