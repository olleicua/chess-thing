var path = require('path');
var game = require('../app/game/game').build();
var board = require('../app/board/board').build();

game.load('games/demo');
board.populate();

var move;
while (move = game.nextMove()) {
  try {
    board.volatileMove(move);
  } catch(error) {
    board.display();
    console.log(error);
    process.exit();
  }
}

board.display();
console.log(board.status());
