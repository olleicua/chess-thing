var _ = require('underscore');
var clc = require('cli-color');

module.exports = {
  display: function() {
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        this.displaySquare((i + j) % 2, this.grid[i][j]);
      }
      process.stdout.write("\n");
    }
  },

  displaySquare: function(squareParity, piece) {
    if (squareParity === 0) {
      var squareColor = 'White';
      var format = clc.black.bgWhite;
    } else {
      var squareColor = 'Black';
      var format = clc.white.bgBlack;
    }

    var out = (!_.isObject(piece)) ? ' ' : (squareColor === piece.color) ?
      piece.outlineCodepoint : piece.filledCodepoint;

    process.stdout.write(format(out + ' '));
  }
};
