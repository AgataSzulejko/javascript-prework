let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);

/*if (randomNumber == 1) {
    computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'nożyce';
} else if  (randomNumber == 3) {
    computerMove = 'papier';
}*/

printMessage('Mój ruch to: ' + computerMove);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: nożyce, 3: papier.');

let playerMove = getMoveName(playerInput);

/*if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'nożyce';
} else if (playerInput == '3'){
    playerMove = 'papier';
}*/

function getMoveName(argMoveId){
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
		printMessages('Nie znam ruchu o id ' + argMoveId + '.');
		return 'nieznany ruch';
	}
}

function displayResult(argComputerMove, argPlayerMove) {

	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
   (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') ||
   (argComputerMove == 'papier' && argPlayerMove == 'nożyce')) {
    printMessage('Ty wygrywasz!');
  }

if ((argComputerMove == 'papier' && argPlayerMove == 'kamień') ||
    (argComputerMove == 'nożyce' && argPlayerMove == 'papier') ||
    (argComputerMove == 'kamień' && argPlayerMove == 'nożyce')) {
    printMessage('Komputer wygrywa!');
  }

if ((argComputerMove == 'papier' && argPlayerMove == 'papier') ||
    (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') ||
    (argComputerMove == 'kamień' && argPlayerMove == 'kamień')) {
    printMessage('Mamy remis!');
  }

 if (argPlayerMove == 'nieznany ruch') {
    printMessage('Powtórz ruch gracza');
}
}

displayResult(computerMove, playerMove);
