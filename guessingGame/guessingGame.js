$(function() {

var tries = 10;
var firstNum = Math.floor(Math.random() * 9) + 0;
var secondNum = Math.floor(Math.random() * 9) + 0;
var thirdNum = Math.floor(Math.random() * 9) + 0;

while(firstNum == secondNum || firstNum == thirdNum || secondNum == thirdNum) {
  firstNum = Math.floor(Math.random() * 9) + 0;
  secondNum = Math.floor(Math.random() * 9) + 0;
  thirdNum = Math.floor(Math.random() * 9) + 0;
}   
console.log(firstNum);
console.log(secondNum);
console.log(thirdNum);
$("#but").on("click", function () {
  if ($("#input1").val() == firstNum){
    $("#col1").css("background-color", "green");
  } else if ($("#input1").val() == secondNum || $("#input1").val() == thirdNum) {
    $("#col1").css("background-color", "yellow");
  } else {
    $("#col1").css("background-color", "red");
  }
  tries = tries - 1;
  $("#header").html("You have " + tries + " tries left to Defeat Number Man!");
  if (tries == 0) {
    alert("Number Man Wins Again!");
    location.reload();
  }
}); 
$("#but").on("click", function () {
  if ($("#input2").val() == secondNum){
    $("#col2").css("background-color", "green");
  } else if ($("#input2").val() == firstNum || $("#input2").val() == thirdNum) {
    $("#col2").css("background-color", "yellow");
  } else {
    $("#col2").css("background-color", "red");
  }
});
$("#but").on("click", function () {
  if ($("#input3").val() == thirdNum){
    $("#col3").css("background-color", "green");
  } else if ($("#input3").val() == firstNum || $("#input3").val() == secondNum) {
    $("#col3").css("background-color", "yellow");
  } else {
    $("#col3").css("background-color", "red");
  }
});
$("#but").on("click", function() {
  if ($("#input1").val() == firstNum && $("#input2").val() == secondNum && $("#input3").val() == thirdNum) {
    alert("You Have Defeated Number Man!");
    location.reload();
  }
});

});

function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
  } else {
      return true;
  }      
}

