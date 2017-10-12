var baseGame = require('../app/game/game');
var board = require('../app/board/board').build();

var game = baseGame.load('../games/demo');
board.populate();

var move;
while (move = game.nextMove()) {
  try {
    board.volatileMove(move);
  } catch(error) {
    board.display();
    console.log('Illegal move: ' + move);
    process.exit();
  }
}

board.display();
console.log(board.status());
