var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else if(computerChoice <= 0.95) {
	computerChoice = "scissors";
}  else {
	computerChoice = "BOMB!!";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
      return  prompt("Try again 1, 2, 3 GO!!!");
    }else if(choice1 === "rock"){
      if(choice2 === "scissors"){
        return "rock wins";
      }
    }
    else if(choice1 === "paper") {
      if(choice2 === "rock"){
          return "paper wins";
      }
    }
    else if(choice1 === "scissors") {
      if(choice2 === "paper"){
          return "scissors wins";
      }
    }

    else if(choice1, choice2 === "BOMB!!") {
      return "BOMB ALWAYS WINS";
    }

  };
  compare(userChoice, computerChoice);
