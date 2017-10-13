var _ = require('underscore');
var populateable = require('./populateable');
var displayable = require('./displayable');
var moveable = require('./moveable');

module.exports = _.extend({}, populateable, displayable, moveable, {
  build: function() {
    var _board = Object.create(this);
    _board.buildGrid();
    _board.turn = 'White';
    return _board;
  },

  buildGrid: function() {
    this.grid = [];
    for (var i = 0; i < 8; i++) {
      this.grid.push([]);
      for (var j = 0; j < 8; j++) {
        this.grid[i].push(null);
      }
    }
  }
});
