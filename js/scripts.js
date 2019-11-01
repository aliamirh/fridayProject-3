$(document).ready(function() {
  $("#userNum").submit(function(event) {
    event.preventDefault();
    var userNum = parseInt($("input#userInput").val());
    var userNumArr = [];
    var numberSplit = function() {
      var userNumPush = userNum
      for (i = 1; i <= userNum; i++) {
        userNumArr.push(userNumPush)
        userNumPush -= 1;
      }
  

    };

  });
});
