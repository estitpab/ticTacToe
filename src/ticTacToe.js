class TicTacToe {
    constructor() {
      this.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ];
    }
  
    makeMove(row, col, player) {
      if (this.board[row][col] !== '') {
        throw new Error('Space already occupied');
      }
      this.board[row][col] = player;
    }
  
    checkWin() {
      const lines = [
        // Rows
        [this.board[0][0], this.board[0][1], this.board[0][2]],
        [this.board[1][0], this.board[1][1], this.board[1][2]],
        [this.board[2][0], this.board[2][1], this.board[2][2]],
        // Columns
        [this.board[0][0], this.board[1][0], this.board[2][0]],
        [this.board[0][1], this.board[1][1], this.board[2][1]],
        [this.board[0][2], this.board[1][2], this.board[2][2]],
        // Diagonals
        [this.board[0][0], this.board[1][1], this.board[2][2]],
        [this.board[0][2], this.board[1][1], this.board[2][0]]
      ];
  
      return lines.some(line => line.every(cell => cell === 'X') || line.every(cell => cell === 'O'));
    }
  }
  
  module.exports = TicTacToe;
  