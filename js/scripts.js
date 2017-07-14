
$(document).ready(function() {
  $("#ping-pong").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#numbers").val());
    var userOutput = pingPongOutput(userInput);
    $(".output").text(userOutput);
    });
  });

    // if (result === "ping") {
    //   $(".output").text("<li>" + "ping" + "</li>");
    // } else if (result === "pong") {
    // $(".output").text("<li>" + "pong" + "</li>");
    // } else if (result === "ping-pong")
    // $(".output").text("ping-pong")
    //
    //

    // for (var i = 1; i <= userInput; i++) {
    //   // $(".output").append("<li>" + i + "</li>");

//counts up from 1
var pingPongOutput = function(userInput) {
      debugger;
  var returnValue = [];
  for (var i = 1; i <= userInput; i++) {
    returnValue.push(i);
  }

  for (var i = 0; i < returnValue.length; i++) {
    if (i % 3 === 0) {
      returnValue.splice(returnValue[i], 1, "ping")
    } else if (i % 5 === 0){
      returnValue.splice(returnValue[i], 1, "pong")
    } else if (i % 15 === 0) {
      returnValue.splice(returnValue[i], 1, "ping-pong")
    }

  }
  }


    // while (i < returnValue.length) {
    //   if (i % 3 === 0) {
    //   var returnPingPong = returnValue.splice([i], 1, "ping");
    // }
  // }

//
//

//     } else if (i % 5 === 0) {
//       var returnPingPong = returnValue.splice([i], 1, "pong");
//       i+=2;
//     } else if (i % 15 === 0) {
//       var returnPingPong = returnValue.splice([i], 1, "ping-pong");
//       i+=2;
//     }
//   }
// }

//implement ping pong
// var pingPongOutput = function(number) {
//     $(".output").append("<li>" + pingPongOutput(userInput) + "</li>");
//
//
//   var pingPongOutput = function(number) {
//     var returnValue = [];
//     for (var i = 0; i < number; i-=1) {
//       returnValue.push(i);
//   }
// } return returnValue;
