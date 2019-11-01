$(document).ready(function(){
  $("#beepForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#beepNum").val());
    console.log(typeof userInput)
    var userInputArr=[];
    var userNum1 = function(){
      var userInputPush = userInput;
      for(i=1; i <= userInput; i++){
      userInputArr.push(userInputPush)
      userInputPush -= 1;

      }
    };

    



  });
});
