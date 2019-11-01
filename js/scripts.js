$(document).ready(function(){
  $("#beepForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($(".beepNum").val())
    var userInputArr=[];
    function userInputSplit (userInput){
      var userInputPush = userInput
      for(i=1; i<= userInput; i++){
        userInputArr.push(userInputPush)
      }

    }



  });
});
