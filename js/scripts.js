

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
        for (i = 0; i < userNumArr.length; i++) {
        if (userNumArr[i].toString().includes(3)) {
          userNumArr[i] = "Sorry Dave";
        } else if (userNumArr[i].toString().includes(2)) {
          userNumArr[i] = "Boop";
        } else if (userNumArr[i].toString().includes(1)) {
          userNumArr[i] = "Beep";
        }
      }
    };
  });
});
