$(document).ready(function(){
  $("#beepForm").submit(function(){
    event.preventDefault();
    var userInput = parseInt($("#beepNum").val());
    var inputArr=[]
    var userSplit = function(){
      console.log('test')
      var userInputPush = userInput
      for(i=1; i <= userInput; i++){
      inputArr.push(userInputPush)
      userInputPush -= 1;
      }
    };
    console.log(inputArr)
  });
});
