function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

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
		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
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

if (argComputerMove == argPlayerMove) {
    printMessage('Mamy remis!');
  }

 if (argPlayerMove == 'nieznany ruch') {
    printMessage('Powtórz ruch gracza');
}
}
