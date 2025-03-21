async function buildSchoolList(){
    for(var i = 0; i < universitiesLength/4; i++){
        var rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        for(var j=0; j<4;j++){
            if(universitiesObject.universityName[i*4+j]==null){
                continue;
            }
            const img = new Image();
            img.src = 'images/universities/'+universitiesObject.universityName[i*4+j]+'.png';
            img.classList.add("uniImage");
            var columnDiv = document.createElement("div");
            columnDiv.classList.add("col-md-3", "uniImageDiv");
            columnDiv.appendChild(img);
            rowDiv.appendChild(columnDiv);
        }
        document.getElementById("schoolList").appendChild(rowDiv);
    }
}
window.onload = function() {
    buildSchoolList();
}