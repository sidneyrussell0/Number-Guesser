let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return (Math.floor(Math.random() * 9)); 
};



const compareGuesses = (humanGuess, computerGuess, targetNumber) => {

    distanceHuman = Math.abs(humanGuess - targetNumber);
    distanceComputer = Math.abs(computerGuess - targetNumber);
     
     if (distanceHuman < distanceComputer) {
        return true 
    } else if (distanceHuman < distanceComputer) {
        return false 
    } else if (distanceHuman === distanceComputer) {
        return true
    };
};

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    };
};

const advanceRound = () => {
    currentRoundNumber += 1;
};