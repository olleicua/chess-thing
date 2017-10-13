var fs = require('fs');
var _ = require('underscore');

module.exports = {
  build: function() {
    return _.extend(Object.create(this), {
      moves: []
    });
  },

  load: function(file) {
    var rawMoves = fs.readFileSync(file, {encoding: 'utf8'}).split(/\s+/g);
    this.moves = _.filter(rawMoves, function(move) {
      return move.length > 0;
    });
    this.currentIndex = 0;
  },

  nextMove: function() {
    var move = this.moves[this.currentIndex];
    this.currentIndex++;
    return move;
  }
};
