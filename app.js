/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

gameInitilize();

document.getElementById('dice-roll').addEventListener('click', rollTheDice);

document.querySelector('.btn-hold').addEventListener('click', hold);

function gameInitilize() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;//0 - First Player, 1 - Second Player

    document.querySelector('.dice').style.display = 'none';

    //Current Scores to 0
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;

    //Global Scores to 0
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;

}

function rollTheDice() {

    dice = Math.floor(Math.random() * 6) + 1;

    if (dice === 6 && activePlayer === 0) {
        removeClassActive(activePlayer);
        document.querySelector('.dice').style.display = 'none'
        document.querySelector('#current-' + activePlayer).textContent = 0;
        activePlayer = 1;
        roundScore = 0;
        addClassActive(activePlayer);

    } else if (dice === 6 && activePlayer === 1){
        removeClassActive(activePlayer);
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('#current-' + activePlayer).textContent = 0;
        activePlayer = 0;
        roundScore = 0;
        addClassActive();

    } else {

        roundScore += dice;
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        document.querySelector('.dice').src = 'dice-' + dice + '.png';

    }

    
    
}

function addClassActive() {

    document.getElementById('player-' + activePlayer).classList.add("active");
}

function removeClassActive() {

    document.getElementById('player-' + activePlayer).classList.remove("active");

}


function hold() {

    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


    if (activePlayer === 0)
        activePlayer = 1;
    else
        activePlayer = 0;
    

}
