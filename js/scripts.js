$(document).ready(function(){
  $("#beepForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input.beepNum").val())
    var userInputArr=[];
    var userInputSplit = function(){
      console.log("test")
      for(i=0; i <= userInput; i++){
      var userInputPush = userInput
      userInputArr.push(userInputPush)
      userInputPush -= 1;
      }
    }





  });
});
