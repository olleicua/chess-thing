var piece = require('./piece');

module.exports = {
  populate: function() {
    this.grid[0][0] = piece.build({color: 'White', type: 'Rook'});
    this.grid[0][1] = piece.build({color: 'White', type: 'Knight'});
    this.grid[0][2] = piece.build({color: 'White', type: 'Bishop'});
    this.grid[0][3] = piece.build({color: 'White', type: 'King'});
    this.grid[0][4] = piece.build({color: 'White', type: 'Queen'});
    this.grid[0][5] = piece.build({color: 'White', type: 'Bishop'});
    this.grid[0][6] = piece.build({color: 'White', type: 'Knight'});
    this.grid[0][7] = piece.build({color: 'White', type: 'Rook'});
    for(var i = 0; i < 8; i++) {
      this.grid[1][i] = piece.build({color: 'White', type: 'Pawn'});
    }
    this.grid[7][0] = piece.build({color: 'Black', type: 'Rook'});
    this.grid[7][1] = piece.build({color: 'Black', type: 'Knight'});
    this.grid[7][2] = piece.build({color: 'Black', type: 'Bishop'});
    this.grid[7][3] = piece.build({color: 'Black', type: 'King'});
    this.grid[7][4] = piece.build({color: 'Black', type: 'Queen'});
    this.grid[7][5] = piece.build({color: 'Black', type: 'Bishop'});
    this.grid[7][6] = piece.build({color: 'Black', type: 'Knight'});
    this.grid[7][7] = piece.build({color: 'Black', type: 'Rook'});
    for(var i = 0; i < 8; i++) {
      this.grid[6][i] = piece.build({color: 'Black', type: 'Pawn'});
    }
  }
};
