'use strict';

const secretNumber = Math.trunc(Math.random()*20+1);

let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click',
 function(){
    const guess =Number( document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent = "Please enter a number";
    }else if(guess === secretNumber){

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('.message').textContent = "Correct Answer!!";

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width= '30rem';

        if(highscore < score){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }else if(guess>secretNumber){

        if(score > 0){
         document.querySelector('.message').textContent = "To High";
        score--;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "😞 you lost the game";

        }
       
    }else if(guess < secretNumber){
        if(score > 0){
            document.querySelector('.message').textContent = "To Low";
           score--;
           document.querySelector('.score').textContent = score;
           }else{
               document.querySelector('.message').textContent = "😞 you lost the game";
           }

    }
})

document.querySelector('.again').addEventListener('click',
function(){
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('body').style.backgroundColor = '#222222';
    document.querySelector('.guess').value = ' '
        document.querySelector('.number').style.width= '15rem';
        document.querySelector('.number').textContent = '?';
        
}

)