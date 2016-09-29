$(function() {



function toggler(total) {
    $("#" + total).toggle();
}
var total = 0;
var perPerson = 0;
$("#input2").val(1);
$("#test").val(0);
var tip = 0;

$("#but1").on("click", function() {
  if ($("#input1").val() == 0) {
    alert ("please enter bill amount!");
  } else {
    $("#total").fadeIn("slow").css("display", "block");
  }
  
  
});

$("#but2").on("click", function () {
  $("#split").fadeIn("slow").css("display", "block");
  
});



$("#but2").on("click", function() {
  if (tip == 0) {
  alert("Please enter a tip amount!");
  $("#split").css("display", "none");
  }
  
});

$("#small").on("click", function () {
  var bill = $("#input1").val();
  tip = bill * 0.15;
  var both = bill/1 + tip;
  $("#but2").on("click", function() {
  var split = both / $("#input2").val();
  $("#test").val(both.toFixed(2));
  $("#test2").val(split.toFixed(2));
  $("#split").css("display", "block");
  $("#tipnum").val(tip.toFixed(2));
  });
  
});

$("#medium").on("click", function () {
  var bill = $("#input1").val();
  tip = bill * 0.20;
  var both = bill/1 + tip;
  $("#but2").on("click", function() {
  var split = both / $("#input2").val();
  $("#test").val(both.toFixed(2));
  $("#test2").val(split.toFixed(2));
  $("#split").css("display", "block");
  $("#tipnum").val(tip.toFixed(2));
  });
  
  
});

$("#large").on("click", function () {
  var bill = $("#input1").val();
  tip = bill * 0.25;
  var both = bill/1 + tip;
  $("#but2").on("click", function() {
    var split = both / $("#input2").val();
    $("#test").val(both.toFixed(2));
    $("#test2").val(split.toFixed(2));
    $("#split").css("display", "block");
    $("#tipnum").val(tip.toFixed(2));
  }); 
});





$("#but3").on("click", function () {
  location.reload();
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