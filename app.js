/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;//0 - First Player, 1 - Second Player

function rollTheDice() {

    dice = Math.floor(Math.random() * 6) + 1;

    document.querySelector('#current-' + activePlayer).textContent = dice;
    document.querySelector('.dice').src = 'dice-' + dice + '.png';

    if (dice === 6 && activePlayer === 0) {

        document.querySelector('#current-' + activePlayer).textContent = 0;
        activePlayer = 1;
        toggleClass(activePlayer)

    } else if (dice === 6 && activePlayer === 1){

        document.querySelector('#current-' + activePlayer).textContent = 0;
        activePlayer = 0;
        toggleClass(activePlayer)
    } 
       

}

function toggleClass(activePlayer) {

    document.getElementsByClassName('player-' + activePlayer + '-panel').classList.remove("active");

}

document.getElementById('dice-roll').addEventListener('click', rollTheDice);