
const TicTacToe = require('../src/ticTacToe');

test('should create an empty board', () => {
    const game = new TicTacToe();
    const expectedBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    expect(game.board).toEqual(expectedBoard);
});

test('should allow a player to make a move', () => {
    const game = new TicTacToe();
    game.makeMove(0, 0, 'X');
    expect(game.board[0][0]).toBe('X');
});

test('should not allow a move on an occupied space', () => {
    const game = new TicTacToe();
    game.makeMove(0, 0, 'X');
    expect(() => {
        game.makeMove(0, 0, 'O');
    }).toThrow('Space already occupied');
});

test('should detect a win', () => {
    const game = new TicTacToe();
    game.makeMove(0, 0, 'X');
    game.makeMove(1, 0, 'X');
    game.makeMove(2, 0, 'X');
    expect(game.checkWin()).toBe(true);
});
