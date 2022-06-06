'use strict';

const diceEl = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let scores, currentScore, activePlayer, playing;

const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current0El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

};
init();

const switchPlayer = function () {
    //we can also directly assign based on the active status of a player as below
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    //We can directly assign current value to 0
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

rollBtn.addEventListener('click', function () {
    //1. Get the random Number between 1 and 6 
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        //2. Match it with the image which already has handy.
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        //3. Store the data to the currentScore of which to be added with random Number.
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // 4. If the condition like reaches to 1 then stop current player and errase the currentScore to 0 and switch to next player.
            switchPlayer();
        }
    }
})

holdBtn.addEventListener('click', function () {
    if (playing) {

        //1. Store the current value to tatal value/score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        //2. If player scores >=100 then it is the winning moment no operation would happens after clecking of any buttons except New Game.
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.add('hidden');

            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        } else {
            // Switch to the next player
            switchPlayer();
        };
    };

});

newGame.addEventListener('click', init);