'use strict';

var score , roundScore, activePlayer,gamePlay ;

init();




document.querySelector('.btn--roll').addEventListener('click',function () {
    if(gamePlay){
 // 1. Random Number
 var dice = Math.floor(Math.random()*6)+1;
    
 // 2 . Display the result
 var diceDOM = document.querySelector(".dice");
 diceDOM.style.display="block";
 diceDOM.src = 'dice-'+dice+'.png';

 // Update the round score if the rolled was not a 1
 if (dice!==1) {
     // Add Score
     roundScore += dice;
     document.querySelector('#current--' + activePlayer).textContent=roundScore;
 } else {
     // Next Player
     nextPlayer();

     
 }
    }
   
    
    
});

document.querySelector('.btn--hold').addEventListener('click',function () {

    if(gamePlay){
        
         // Add current score to the global score
    score[activePlayer]+=roundScore;
    
    // udate the UI
    document.querySelector('#score--' + activePlayer).textContent=score[activePlayer];

    // cehck if the fplayer won the game
    if (score[activePlayer] >= 20) {
        document.querySelector('#name--' + activePlayer).textContent='Winner!';
        document.querySelector(".dice").style.display="none";

        document .querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document .querySelector(`.player--${activePlayer}`).classList.remove('player--active');


        gamePlay=false;

    } else {
         // Next Player
    nextPlayer();
    }

    }
   

   
});



function nextPlayer() {
    activePlayer===0?activePlayer=1:activePlayer=0;
    roundScore=0;
    document.getElementById('current--0').textContent='0';
    document.getElementById('current--1').textContent='0';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn--new').addEventListener("click" , init);

function init(){
    score=[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlay=true;

    document.querySelector(".dice").style.display="none";
    document.getElementById('score--0').textContent='0';
    document.getElementById('score--1').textContent='0';
    document.getElementById('current--0').textContent='0';
    document.getElementById('current--1').textContent='0';
    document.querySelector('#name--0').textContent='Player 1';
    document.querySelector('#name--1').textContent='Player 2';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
   


}
// document.querySelector('#current--' + activePlayer).textContent = dice;