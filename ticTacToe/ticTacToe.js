$(function (){
var turn = 0;
var player1 = [];
var player2 = [];
var cat = player1.concat(player2);
var player1wins = 0;
var player2wins = 0;






$("#but1").on("click", function(){
  turn = turn + 1;
  if (turn % 2 == 0) {
    $("#but1").html("<img src = images/O.png>");
    player2.push('a');
    $("#but1").prop("disabled",true);
    if (player2.includes('a') && player2.includes('b') && player2.includes('c')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player2.includes ('a') && player2.includes('e') && player2.includes('i')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player2.includes ('a') && player2.includes('d') && player2.includes('g')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player1.length + player2.length == 9) {
      alert("The Cat Wins!");
    }
  } else {
    $("#but1").html("<img src = images/X.png>");
    player1.push('a');
    $("#but1").prop("disabled",true);
    if (player1.includes('a') && player1.includes('b') && player1.includes('c')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.includes ('a') && player1.includes('e') && player1.includes('i')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.includes ('a') && player1.includes('d') && player1.includes('g')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.length + player2.length == 9) {
      alert("The Cat Wins!");
    }
  }
  
});
  
$("#but2").on("click", function(){
  turn = turn + 1;
  if (turn % 2 == 0) {
    $("#but2").html("<img src = images/O.png>");
    player2.push('b');
    $("#but2").prop("disabled",true);
    if (player2.includes('a') && player2.includes('b') && player2.includes('c')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player2.includes ('b') && player2.includes('e') && player2.includes('h')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player1.length + player2.length == 9) {
      alert("The Cat Wins!");
    }
  } else {
    $("#but2").html("<img src = images/X.png>");
    player1.push('b');
    $("#but2").prop("disabled",true);
    if (player1.includes('a') && player1.includes('b') && player1.includes('c')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.includes ('b') && player1.includes('e') && player1.includes('h')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.length + player2.length == 9) {
      alert("The Cat Wins!");
    }
  }
  
});

$("#but3").on("click", function(){
  turn = turn + 1;
  if (turn % 2 == 0) {
    $("#but3").html("<img src = images/O.png>");
    player2.push('c');
    $("#but3").prop("disabled",true);
    if (player2.includes('a') && player2.includes('b') && player2.includes('c')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player2.includes ('c') && player2.includes('f') && player2.includes('i')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player2.includes ('c') && player2.includes('e') && player2.includes('g')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player1.length + player2.length == 9) {
      alert("The Cat Wins!");
    }
  } else {
    $("#but3").html("<img src = images/X.png>");
    player1.push('c');
    $("#but3").prop("disabled",true);
    if (player1.includes('a') && player1.includes('b') && player1.includes('c')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.includes ('c') && player1.includes('f') && player1.includes('i')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.includes ('c') && player1.includes('e') && player1.includes('g')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.length + player2.length == 9) {
      alert("The Cat Wins!");
    }
  }
  
});


$("#but4").on("click", function(){
  turn = turn + 1;
  if (turn % 2 == 0) {
    $("#but4").html("<img src = images/O.png>");
    player2.push('d');
    $("#but4").prop("disabled",true);
    if (player2.includes('d') && player2.includes('e') && player2.includes('f')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player2.includes ('a') && player2.includes('d') && player2.includes('g')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player1.length + player2.length == 9) {
      alert("The Cat Wins!");
    }
  } else {
    $("#but4").html("<img src = images/X.png>");
    player1.push('d');
    $("#but4").prop("disabled",true);
    if (player1.includes('d') && player1.includes('e') && player1.includes('f')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.includes ('a') && player1.includes('d') && player1.includes('g')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.length + player2.length == 9) {
      alert("The Cat Wins!");
    }
  }
  
});

$("#but5").on("click", function(){
  turn = turn + 1;
  if (turn % 2 == 0) {
    $("#but5").html("<img src = images/O.png>");
    player2.push('e');
    $("#but5").prop("disabled",true);
    if (player2.includes('d') && player2.includes('e') && player2.includes('f')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player2.includes ('b') && player2.includes('e') && player2.includes('h')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player2.includes ('a') && player2.includes('e') && player2.includes('i')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player2.includes ('c') && player2.includes('e') && player2.includes('g')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player1.length + player2.length == 9) {
      alert("The Cat Wins!");
    }
  } else {
    $("#but5").html("<img src = images/X.png>");
    player1.push('e');
    $("#but5").prop("disabled",true);
    if (player1.includes('d') && player1.includes('e') && player1.includes('f')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.includes ('b') && player1.includes('e') && player1.includes('h')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.includes ('a') && player1.includes('e') && player1.includes('i')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.includes ('c') && player1.includes('e') && player1.includes('g')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.length + player2.length == 9) {
      alert("The Cat Wins!");
    }
  }
  
});

$("#but6").on("click", function(){
  turn = turn + 1;
  if (turn % 2 == 0) {
    $("#but6").html("<img src = images/O.png>");
    player2.push('f');
    $("#but6").prop("disabled",true);
    if (player2.includes('c') && player2.includes('f') && player2.includes('i')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player2.includes ('d') && player2.includes('e') && player2.includes('f')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player1.length + player2.length == 9) {
      alert("The Cat Wins!");
    }
  } else {
    $("#but6").html("<img src = images/X.png>");
    player1.push('f');
    $("#but6").prop("disabled",true);
    if (player1.includes('c') && player1.includes('f') && player1.includes('i')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.includes ('d') && player1.includes('e') && player1.includes('f')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.length + player2.length == 9) {
      alert("The Cat Wins!");
    }
  }
  
});

$("#but7").on("click", function(){
  turn = turn + 1;
  if (turn % 2 == 0) {
    $("#but7").html("<img src = images/O.png>");
    player2.push('g');
    $("#but7").prop("disabled",true);
    if (player2.includes('a') && player2.includes('d') && player2.includes('g')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player2.includes ('g') && player2.includes('h') && player2.includes('i')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player2.includes ('c') && player2.includes('e') && player2.includes('g')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player1.length + player2.length == 9) {
      alert("The Cat Wins!");
    }
  } else {
    $("#but7").html("<img src = images/X.png>");
    player1.push('g');
    $("#but7").prop("disabled",true);
    if (player1.includes('a') && player1.includes('d') && player1.includes('g')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.includes ('g') && player1.includes('h') && player1.includes('i')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.includes ('c') && player1.includes('e') && player1.includes('g')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.length + player2.length == 9) {
      alert("The Cat Wins!");
    }
  }
  
});

$("#but8").on("click", function(){
  turn = turn + 1;
  if (turn % 2 == 0) {
    $("#but8").html("<img src = images/O.png>");
    player2.push('h');
    $("#but8").prop("disabled",true);
    if (player2.includes('b') && player2.includes('e') && player2.includes('h')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player2.includes ('g') && player2.includes('h') && player2.includes('i')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player1.length + player2.length == 9) {
      alert("The Cat Wins!");
    }
  } else {
    $("#but8").html("<img src = images/X.png>");
    player1.push('h');
    $("#but8").prop("disabled",true);
    if (player1.includes('b') && player1.includes('e') && player1.includes('h')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.includes ('g') && player1.includes('h') && player1.includes('i')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.length + player2.length == 9) {
      alert("The Cat Wins!");
    }
  }
  
});

$("#but9").on("click", function(){
  turn = turn + 1;
  if (turn % 2 == 0) {
    $("#but9").html("<img src = images/O.png>");
    player2.push('i');
    $("#but9").prop("disabled",true);
    if (player2.includes('c') && player2.includes('f') && player2.includes('i')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player2.includes ('g') && player2.includes('h') && player2.includes('i')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player2.includes ('a') && player2.includes('e') && player2.includes('i')) {
      alert("Player 2 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 1;
      player2wins = player2wins + 1;
      $("#player2wins").html("<h2 id = 'player2wins'> Player 2 Wins - " + player2wins);
    } else if (player1.length + player2.length == 9) {
      alert("The Cat Wins!");
    }
  } else {
    $("#but9").html("<img src = images/X.png>");
    player1.push('i');
    $("#but9").prop("disabled",true);
    if (player1.includes('c') && player1.includes('f') && player1.includes('i')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.includes ('g') && player1.includes('h') && player1.includes('i')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.includes ('a') && player1.includes('e') && player1.includes('i')) {
      alert("Player 1 Wins!");
      $(":button").prop("disabled", true);
      $("#reset").prop("disabled", false);
      turn = 0;
      player1wins = player1wins + 1;
      $("#player1wins").html("<h2 id = 'player1wins'> Player 1 Wins - " + player1wins);
    } else if (player1.length + player2.length == 9) {
      alert("The Cat Wins!");
    }
  }
 
});
$("#reset").on("click", function() {
  $(":button").html(null);
  $("#reset").html("Reset");
  $(":button").prop("disabled", false);
  player1 = [];
  player2 = [];
});

});
