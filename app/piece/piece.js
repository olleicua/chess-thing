var types = {
  Rook: require('./rook'),
  Knight: require('./knight'),
  Bishop: require('./bishop'),
  King: require('./king'),
  Queen: require('./queen'),
  Pawn: require('./pawn')
};

module.exports = {
  build: function(base) {
    var _piece = Object.create(types[base.type]);
    _piece.color = base.color;
    return _piece;
  }
};
