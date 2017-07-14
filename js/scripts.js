
$(document).ready(function() {
  $("#ping-pong").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#numbers").val());
    // for (var i = 1; i <= userInput; i++) {
    //   $(".output").append("<li>" + i + "</li>");
    // }
    var userOutput = pingPongOutput(userInput);
    $(".output").text("<li>" + userOutput + "</li>")
  });
 });

var pingPongOutput = function(number) {
  if (i % 3 === 0) {
    i = "ping";
  } else if (i % 5 === 0) {
    i = "pong";
  } else if (i % 15 === 0) {
    i = "ping-pong"
  }
  
  var returnValue = [];
  for (var i = 1; i <= number; i++) {
    returnValue.push(i);
    }

    for (var i = 0; i < returnValue.length; i++) {

  }
};







//     $(".output").append("<li>" + pingPongOutput(userInput) + "</li>");
//
//
//   var pingPongOutput = function(number) {
//     var returnValue = [];
//     for (var i = 0; i < number; i-=1) {
//       returnValue.push(i);
//   }
// } return returnValue;
