function playGame(playerInput){
clearMessages();
let randomNumber = Math.floor;(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

let playerMove = getMoveName(playerInput);

displayResult(computerMove, playerMove);
}

let playScissors = document.getElementById('play-scissors');
playScissors.addEventListener('click', function(){
  playGame(2);
});

let playRock = document.getElementById('play-rock');
playRock.addEventListener('click', function(){
  playGame(1);
});

let playPaper = document.getElementById('play-paper');
playPaper.addEventListener('click',function(){
  playGame(3);
});
