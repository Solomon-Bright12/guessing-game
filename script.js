

function getRandomNumber(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function guess(){
    const secretNumber = getRandomNumber(1, 100);
    let guessCount = 0;
    let guess = document.getElementById('guess');
    let guessbtn = document.getElementById("guessbtn")
    guessbtn.addEventListener('click', function(){
        
        let userGuess = parseInt(guess.value);
        guessCount++;
        
        if(isNaN(userGuess)){
            alert("Please enter a valid number");
            return
        }
       
       
        
        if(guessCount > 5 ){
            alert("You're not good at this. The number was " + secretNumber);
            return
        }
        if(userGuess < secretNumber){
            alert("Too low! Try again.");
        }
        else if(userGuess > secretNumber){
            alert("Too high! Try again.");
        }
        else{
           return `yahh You won !!! <br> the Number was ${secretNumber}<br> You guessed it in ${guessCount} guesses` 
        }
           
        
    }
)
    
    
}
guess();