var piece = require('../piece/piece');

module.exports = {
  volatileMove: function(move) {
    var piece = this.pieceForMove(move);
    var destination = this.destinationForMove(move);

    if (piece.canMoveTo(destination)) {
      this.move(piece, destination, move);
    } else {
      throw 'Illegal move: ' + move;
    }
  },

  pieceForMove: function(move) {
    var patternMatch = /^([RNBQK])/.exec(move);
    var pieceType = piece.TYPES[{
      R: 'Rook',
      N: 'Knight',
      B: 'Bishop',
      Q: 'Queen',
      K: 'King'
    }[patternMatch[1]] || 'Pawn'];
    return pieceType.findForMove(this, move);
  },

  destinationForMove: function(move) {

  },

  move: function(piece, move) {}
};
