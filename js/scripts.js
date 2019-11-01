

$(document).ready(function() {
  $("#userNum").submit(function(event) {
    event.preventDefault();
    var userNum = parseInt($("input#userInput").val());
    var gettingFunctionNumber = numberSplit(userNum)


    function numberSplit(userInput) {
      var userNumArr = [];
      var userNumPush = userNum
      for (i = 1; i <= userNum; i++) {
        userNumArr.push(userNumPush)
        userNumPush -= 1;
      }
      for (i = 0; i < userNumArr.length; i++) {
  
    };
  });
});
