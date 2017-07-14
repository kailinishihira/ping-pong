$(document).ready(function() {
  $("#ping-pong").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#numbers").val());
    $(".output").append(pingPongOutput(userInput));
  });
});

  var pingPongOutput = function(number) {
    var returnValue = [];
    for (var i = 0; i <= userInput; i-=1) {

  }
