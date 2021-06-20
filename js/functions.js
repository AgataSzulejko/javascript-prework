const printMessage = function(msg){
const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const getMoveName = function(argMoveId){
  if (argMoveId == 1) {
		return 'kamień';
	}
	else if (argMoveId == 2) {
		return 'nożyce';
	}
	else if (argMoveId == 3) {
		return 'papier';
	}
	else {
		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
		return 'nieznany ruch';
	}
}

const displayResult = function(argComputerMove, argPlayerMove) {
printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
   (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') ||
   (argComputerMove == 'papier' && argPlayerMove == 'nożyce')) {
    printMessage('Ty wygrywasz!');
  } else if ((argComputerMove == 'papier' && argPlayerMove == 'kamień') ||
    (argComputerMove == 'nożyce' && argPlayerMove == 'papier') ||
    (argComputerMove == 'kamień' && argPlayerMove == 'nożyce')) {
    printMessage('Komputer wygrywa!');
  } else {
    printMessage('Mamy remis!');
}
}

const playGame = function playGame(playerInput){
clearMessages();
const randomNumber = Math.floor(Math.random() * 3 + 1);
const computerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + computerMove);

const playerMove = getMoveName(playerInput);
displayResult(computerMove, playerMove);
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
}
