//---------------User interface----------------------

$(document).ready(function() {
  $("#userNumber").submit(function(event) {
    event.preventDefault();
    var userNum = parseInt($("input#userInput").val());
    var finalStep = numberSplit(userNum).join(",")
    $("#beepBoopLanguage").text(finalStep)

  });
});

//----------------Business logic below----------------

    function numberSplit(userInput) {
      var userNumArr = [];
      for (i = 0; i <= userInput; i++) {
        if ([i].toString().includes(3)) {
          userNumArr.push("Sorry Dave");
        } else if ([i].toString().includes(2)) {
          userNumArr.push("Boop");
        } else if ([i].toString().includes(1)) {
          userNumArr.push("Beep");
        } else{
          userNumArr.push([i])
        }
      }
      return userNumArr.reverse();
    };
