let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: nożyce, 3: papier.');

let playerMove = getMoveName(playerInput);

displayResult(computerMove, playerMove);
