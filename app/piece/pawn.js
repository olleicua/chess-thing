var _ = require('underscore');

module.exports = _.extend(
  Object.create(require('./piece')), {
    type: 'Pawn',
    outlineCodepoint: '♙',
    filledCodepoint: '♟'
  }
);
