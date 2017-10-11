var _ = require('underscore');

module.exports = {
  build: function(base) {
    var _piece = Object.create(this);
    _.extend(_piece, base);
    return _piece;
  },

  outlineCodepoint: '♙',
  filledCodepoint: '♟'
};
