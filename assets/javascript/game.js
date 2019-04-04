$(document).ready(function () {
  // this function will generate a random number between 19 - 120
  var randomNum = Math.floor(Math.random() * 101 + 19);
  // This sets a random number to the target score
  $('#targetScore').text(randomNum);
  var randomJewel = Math.floor(Math.random() * 11 + 1);

  // This sets a random number for each of the jewels between 1 - 12
  // for (jewelNum = 1; jewelNum < 4; jewelNum++) {
  //   var "jewel"+[jewelNum]=function randomJewel() {

  //   }
  // }
  var jewel1 = Math.floor(Math.random() * 11 + 1);
  var jewel2 = Math.floor(Math.random() * 11 + 1);
  var jewel3 = Math.floor(Math.random() * 11 + 1);
  var jewel4 = Math.floor(Math.random() * 11 + 1);

  var myScore = 0;
  var wins = 0;
  var losses = 0;

  // This is the variables that will hold the counts for wins, losses, and your score 
  $('#myWins').text(wins);
  $('#myLosses').text(losses);

  // This will reset the game after the game ends.  I will need to re-run the same functions from above without resetting the score counts
  function resetGame() {
    randomNum = Math.floor(Math.random() * 101 + 19);
    jewel1 = Math.floor(Math.random() * 11 + 1);
    jewel2 = Math.floor(Math.random() * 11 + 1);
    jewel3 = Math.floor(Math.random() * 11 + 1);
    jewel4 = Math.floor(Math.random() * 11 + 1);
    $('#targetScore').text(randomNum);
    myScore = 0
    $('#myScore').text(myScore);
    console.log(randomNum); // Lets me see what the random number that was generated is
    console.log(myScore); // shows my current score
    console.log(wins); // shows total wins
    console.log(losses); // shows total losses
  }


  // these are the functions that add to the wins and losses
  function winnerWinner() {
    $('#winSound').get(0).play(); // play the Winner Sound File
    alert("Winner Winner, Chicken Dinner!");
    wins++;
    $('#myWins').text(wins);
    resetGame()
  }
  function loserLoser() {
    $('#loseSound').get(0).play(); // Play the Loser Sound File
    alert("Oh Bummer Dude, you lost BIG TIME!");
    losses++;
    $('#myLosses').text(losses);
    resetGame();
  }

  // this is the click event area for the jewels (Each Jewel has its own event and if/then - need to minimize)
  $('#diamond').on('click', function () {
    myScore += jewel1;
    console.log("My New Score: " + myScore);
    $('#myScore').text(myScore);
    if (myScore === randomNum) {
      winnerWinner();
    }
    else if (myScore > randomNum) {
      loserLoser();
    }
  });
  $('#ruby').on('click', function () {
    myScore += jewel2;
    console.log("My New Score: " + myScore);
    $('#myScore').text(myScore);
    if (myScore === randomNum) {
      winnerWinner();
    }
    else if (myScore > randomNum) {
      loserLoser();
    }
  });
  $('#emerald').on('click', function () {
    myScore += jewel3;
    console.log("My New Score: " + myScore);
    $('#myScore').text(myScore);
    if (myScore === randomNum) {
      winnerWinner();
    }
    else if (myScore > randomNum) {
      loserLoser();
    }
  });
  $('#yellow').on('click', function () {
    myScore += jewel4;
    console.log("My New Score: " + myScore);
    $('#myScore').text(myScore);
    if (myScore === randomNum) {
      winnerWinner();
    }
    else if (myScore > randomNum) {
      loserLoser();
    }
  });
});