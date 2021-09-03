async function buildSchoolList(){
    for(var i = 0; i < universitiesLength; i++){
        const img = new Image();
        img.src = 'images/universities/'+universitiesObject.universityName[i]+'.png';
        
    }
}
window.onload = function() {
    buildSchoolList();
}