'use strict';

/* 
console.log(document.querySelector('.message').textContent )
document.querySelector('.message').textContent  = 'Correct number❤️';

document.querySelector('.number').textContent = 13; 
document.querySelector('.score').textContent = 14

 
document.querySelector('.guess').value   = 21 // to read the value  

*/

// let SECRET_number = Math.trunc(Math.random()*20 )+1
// let score = 20
// let hightscore = 0 

// const displayMessage = (message) =>{
//     document.querySelector('.message') = message
// }
// // document.querySelector('.number').textContent = SECRET_number 

// document.querySelector('.check').addEventListener('click',
//      () => {
//         const guess = Number(document.querySelector('.guess').value);
//         console.log(guess); 

//         if (!guess){
//             // document.querySelector('.message').textContent = 'No Number'
//             displayMessage('No number')

//         }else if (guess === SECRET_number){ 
//             document.querySelector('body').style = 'background:#60b347';
//             document.querySelector('.number').style = 'width:30rem';
//             // document.querySelector('.number').style.width = '30rem';
//             document.querySelector('.number').textContent = SECRET_number 

//             if (score > hightscore){
//                 hightscore = score
//                 document.querySelector('.highscore').textContent = hightscore
//             }
//             document.querySelector('.message').textContent = "Correct number"
//         }else if (guess!==SECRET_number){

        
        
//                if (score > 0){
//                 document.querySelector('.message').textContent = guess > SECRET_number ? "You guess is greater than the hidden number":
//                 "You guess is lesser than the hidden number"
//                 score--
//                 document.querySelector('.score').textContent = score }
//                 else {
//                     document.querySelector('.message').textContent = 'You lose';
//                     document.querySelector('.score') = 0;
//                 }
        
        
        
//         }
    
//     } 
// ) ;

// document.querySelector('.again').addEventListener('click',
//     () => {
//          SECRET_number = Math.trunc(Math.random()*20 )+1       
//         document.querySelector('.number').textContent = SECRET_number 

//         // document.querySelector('.number').style = 'width:30rem';
//         document.querySelector('.message').textContent = 'Start guessing...'
//         document.querySelector('.guess').value = ''
//         document.querySelector('.number').textContent = '?'
//         document.querySelector('.score').textContent = 20
//         document.querySelector('body').style = 'background:#222'
//         document.querySelector('.number').style = 'width:15rem'
        
//     }                                                                   
// )


    let secret_number = Math.trunc(Math.random()*20)+1 ;
    let SCORE = 20 ;
    let HIGHSCORE = 20

    const CHECK = document.querySelector('.check')
    document.querySelector('.number').textContent = secret_number;



    CHECK.addEventListener('click',
        () => {
            // alert('this button works ')

    const GUESS = Number(document.querySelector('.guess').value)

    const Message =  (e) => {   
        document.querySelector('.message').textContent = e
    }

        if (!GUESS || GUESS < 1){
            alert('Invalid Input')
        }
            else if ( GUESS === secret_number){
                console.log('Correct guess')
                document.querySelector('body').style.background = 'green'
                Message('You are right!!!') 
                document.querySelector('.number').style.width = '30rem'

            } else if (GUESS < secret_number && SCORE > -1){
                Message('Too Low!!!')
                document.querySelector('.score').textContent = SCORE--;
                if (SCORE ===    -1){
                    Message('YOU LOSE')
                }

            }
            else if (GUESS > secret_number && SCORE > -1   ){
                Message('Too high!!!')
                document.querySelector('.score').textContent = SCORE--; 
                if (SCORE === -1){
                    Message('YOU LOSE')
                }

                }    if(SCORE > HIGHSCORE){
                    HIGHSCORE = SCORE
                    document.querySelector('.highscore').textContent = HIGHSCORE
                    console.log(HIGHSCORE)
                }
        
        } 
    )


    const AGAIN = document.querySelector('.again')

    AGAIN.addEventListener('click',
        () =>{
            document.querySelector()
        }
    )
    console.log(secret_number)
            