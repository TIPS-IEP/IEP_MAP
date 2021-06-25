$(document).ready(function(){
  $("#get-data-form").submit(function(e){
    var content = tinymce.get("text-editor").getContent();
    $("#data-container").html(content);
    return false;
  });
});