let randomNumber=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt');
let userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guessSlot')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHigh')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let preGuess=[];
let numGuess=1;
let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value)
        validateGuees(guess)
    });
}    

function validateGuees(guess){

    if(isNaN(guess)){
      alert('Please Enter An Number')
       }
    else if( guess<1){
          alert('Please Enter A  Number More Than One')
       
       }
    else if( guess>100){
       alert('Please Enter A  Number Less Than Hundared')
      }

    else{
        preGuess.push(guess)
        if(newGame === 11){
            displayGuess(guess)
            displayMessage(`Game Over. The Random Number Was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }



}

function checkGuess(guess){

    if(guess === randomNumber){
        displayMessage(' Congratulations! ... You Guess Is Right');
       endGame();
       console.log("ra")
    }
    else if(guess< randomNumber){
    displayMessage('Number is low.... Guess A Greater Number');
    }
    else if(guess>randomNumber){
    displayMessage('Number is high.... Guess A Lower Number');
    }


}



function displayGuess(guess){

    userInput.value='';
    guessSlot.innerHTML += `${guess} , `;
    numGuess++;
    remaining.innerHTML=` ${11-numGuess}`
}


function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`

}

function endGame(){
    console.log("hi")
userInput.value='';
userInput.setAttribute('disabled', true);
p.classList.add('button')
p.innerHTML=`<h2 id="newGame"> Start new Game</p>`
startOver.appendChild(p)
playGame=false;
newGame();

}

function newGame(){
const newGameButton=document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100+1);
    preGuess=[]
    numGuess=1;
    guessSlot.innerHTML="";
    remaining.innerHTML=`${11-newGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true;

})
}

