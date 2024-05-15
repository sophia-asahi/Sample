$(document).ready(function () {
  $('#year').text(new Date().getFullYear());
});
$(document).ready(function(){
$("#success-form").hide();
});
$(document).ready(function(){
    $("#submitBtn").click(function(){
        $("#demo").hide();
      $("#success-form").show();
    });})


