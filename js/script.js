let randomNumber = Math.floor(Math.random() * 3 + 1);
('Wylosowana liczba to: ' + randomNumber);
let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
    computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'nożyce';
} else if  (randomNumber == 3) {
    computerMove = 'papier';
}
printMessage('Mój ruch to: ' + computerMove);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: nożyce, 3: papier.');
('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'nożyce';
} else if (playerInput == '3'){
    playerMove = 'papier';
}

printMessage('Twój ruch to: ' + playerMove);

if ((computerMove == 'kamień' && playerMove == 'papier') ||
    (computerMove == 'nożyce' && playerMove == 'kamień') ||
   (computerMove == 'papier' && playerMove == 'nożyce')) {
    printMessage('Ty wygrywasz!');
  }

if ((computerMove == 'papier' && playerMove == 'kamień') ||
    (computerMove == 'nożyce' && playerMove == 'papier') ||
    (computerMove == 'kamień' && playerMove == 'nożyce')) {
    printMessage('Komputer wygrywa!');
  }

if ((computerMove == 'papier' && playerMove == 'papier') ||
    (computerMove == 'nożyce' && playerMove == 'nożyce') ||
    (computerMove == 'kamień' && playerMove == 'kamień')) {
    printMessage('Mamy remis!');
  }

 if (playerMove == 'nieznany ruch') {
    printMessage('Powtórz ruch gracza');
}
