
$(document).ready(function() {
  $("#ping-pong").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#numbers").val());

debugger;

    for (var i = 1; i <= userInput; i++) {
      $(".output").append("<li>" + i + "</li>");
    }
  });
 });



//     $(".output").append("<li>" + pingPongOutput(userInput) + "</li>");
//
//
//   var pingPongOutput = function(number) {
//     var returnValue = [];
//     for (var i = 0; i < number; i-=1) {
//       returnValue.push(i);
//   }
// } return returnValue;
