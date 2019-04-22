/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, diceRolledValue, diceDOM, potentialScore;

gameInitilize();

document.getElementById('dice-roll').addEventListener('click', handleDiceRoll);

document.querySelector('.btn-hold').addEventListener('click', handleHoldButtonClick);

function gameInitilize() {
    scores = [0, 0];
    potentialScore = 0;
    roundScore = 0;
    activePlayer = 0;//0 - First Player, 1 - Second Player

    //Initially hide the dice
    diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'none';

    //Current Scores to 0
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;

    //Global Scores to 0
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;

}

function handleDiceRoll() {

    diceRolledValue = Math.floor(Math.random() * 6) + 1;

    

    if (diceRolledValue === 1) {
        removeClassActive();
        roundScore = 0;
        diceDOM.style.display = 'none'
        document.querySelector('#current-' + activePlayer).textContent = 0;
        
        if (activePlayer === 0) activePlayer = 1;
        else activePlayer = 0;
        
        addClassActive();
    }
    else {

        potentialScore = scores[activePlayer] + roundScore + diceRolledValue;

        if (potentialScore >= 20) {
            alert('Player' + activePlayer + ' wins!!!');

        }

        roundScore += diceRolledValue;
        diceDOM.style.display = 'block';
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        diceDOM.src = 'dice-' + diceRolledValue + '.png';

    }

    
    
}

function addClassActive() {

    document.getElementById('player-' + activePlayer).classList.add("active");
}

function removeClassActive() {

    document.getElementById('player-' + activePlayer).classList.remove("active");

}


function handleHoldButtonClick() {

    diceDOM.style.display = 'none';
    scores[activePlayer] += roundScore;
    potentialScore = 0;
    roundScore = 0;
    
    setActivePlayerScore();

    if (activePlayer === 0)
        activePlayer = 1;
    else
        activePlayer = 0;
    
    addClassActive(activePlayer);

}

function setActivePlayerScore() {

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    removeClassActive(activePlayer);
    document.querySelector('#current-' + activePlayer).textContent = 0;
}
