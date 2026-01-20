'use strict';

/* 
console.log(document.querySelector('.message').textContent )
document.querySelector('.message').textContent  = 'Correct number❤️';

document.querySelector('.number').textContent = 13; 
document.querySelector('.score').textContent = 14

 
document.querySelector('.guess').value   = 21 // to read the value  

*/

const SECRET_number = Math.trunc(Math.random()*20 )+1
let score = 20

document.querySelector('.number').textContent = SECRET_number 

document.querySelector('.check').addEventListener('click',
     () => {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess); 

        if (!guess){
            document.querySelector('.message').textContent = 'No Number'

        }else if (guess === SECRET_number){ 
            document.querySelector('body').style = 'background:#60b347';
            document.querySelector('.number').style = 'width:30rem';
            // document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = SECRET_number 


            document.querySelector('.message').textContent = "Correct number"
        }else if (guess > SECRET_number){
            if (score > 0){
             document.querySelector('.message').textContent = "You guess is greater than the hidden number"
             score--
             document.querySelector('.score').textContent = score }
             else (document.querySelector('.message').textContent = 'You lose')
        
        }else if (guess < SECRET_number){
            if (score > 0){
             document.querySelector('.message').textContent = "You guess is lesser than the hidden number"
             score--
             document.querySelector('.score').textContent = score }else (document.querySelector('.message').textContent = 'You lose')
         
         
        }
    
    } 
) ;

document.querySelector('.again').addEventListener('click',
    () => {
        const SECRET_number = Math.trunc(Math.random()*20 )+1       
        document.querySelector('.number').textContent = SECRET_number 

        // document.querySelector('.number').style = 'width:30rem';
        document.querySelector('.message').textContent = 'Start guessing...'
        document.querySelector('.guess').value = ''
        document.querySelector('.number').textContent = '?'
        document.querySelector('.score').textContent = 20
        document.querySelector('body').style = 'background:#222'
        document.querySelector('.number').style = 'width:15rem'
        
    }                                                                   
)