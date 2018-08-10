$(document).ready(function() {
$("#infos").submit(function(event)  {
event.preventDefault()
  var firstnameInput = $("input#firstname").val();
  var lastnameInput = $("input#lastname").val();
  var addressInput = $("input#address").val();



    $(".firstname").text(firstnameInput);
    $(".lastname").text(lastnameInput);
    $(".address").text(addressInput);
    $("#frontpage").hide();
    $("#backpage").show();
});

$("#goback").click(function(event) {

  $("#frontpage").show();
  $("#backpage").hide();


});

});
