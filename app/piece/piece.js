module.exports = {
  TYPES: {
    Rook: require('./rook'),
    Knight: require('./knight'),
    Bishop: require('./bishop'),
    King: require('./king'),
    Queen: require('./queen'),
    Pawn: require('./pawn')
  },

  build: function(base) {
    var _piece = Object.create(this.TYPES[base.type]);
    _piece.color = base.color;
    return _piece;
  }
};
