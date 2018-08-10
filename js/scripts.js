$(document).ready(function() {

  $("#infos").submit(function(event)  {

  var firstnameInput = $("input#firstname").val();
  var addressInput = $("input#address").val();
  var shoesInput = $("input#shoes").val();
  var sizeInput = $("input#size").val();



    $(".firstname").text(firstnameInput);
    $(".address").text(addressInput);
    $(".shoes").text(shoesInput);
    $(".size").text(sizeInput);
    $("#frontpage").hide();


    event.preventDefault();

  });
});
