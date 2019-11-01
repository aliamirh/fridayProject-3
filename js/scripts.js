$(document).ready(function(){
  $("#beepForm").submit(function(){
    event.preventDefault();
    var userInput = parseInt($("input#beepNum").val());
    console.log(typeof userInput)
    var userInputArr=[];
    var userSplit = function(){
      console.log("test")
      var userInputPush = userInput;
      console.log(userInput)
      for(i=1; i <= userInput; i++){
      userInputArr.push(userInputPush)
      userInputPush -= 1;
      }
      // for (i = 0; i < userInputArr.length; i ++){
      //   if(userInputArr[i].toString().inclueds(3)){
      //     userInputArr[i] = 'boop';
      //   }
      // }
    };
  });
});
