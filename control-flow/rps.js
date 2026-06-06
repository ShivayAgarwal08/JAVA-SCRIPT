function playGame() {

    let userchoice = document
        .getElementById("choice")
        .value
        .toLowerCase();

    const choices = ["rock", "paper", "scissors"];

    const computerchoice =
        choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userchoice === computerchoice) {
        result = "It's a Draw!";
    }

    else if (
        (userchoice === "rock" && computerchoice === "scissors") ||
        (userchoice === "paper" && computerchoice === "rock") ||
        (userchoice === "scissors" && computerchoice === "paper")
    ) {
        result = "You Win!";
    }

    else if (
        userchoice === "rock" ||
        userchoice === "paper" ||
        userchoice === "scissors"
    ) {
        result = "Computer Wins!";
    }

    else {
        result = "Please enter rock, paper, or scissors.";
    }

    document.getElementById("result").innerHTML =
        `You chose ${userchoice}<br>
         Computer chose ${computerchoice}<br>
         ${result}`;
}