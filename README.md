# Tic Tac Toe

Un simple jeu de Tic Tac Toe implémenté en JavaScript avec des tests unitaires utilisant Jest.

## Prérequis

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Structure
```
tic-tac-toe/
├── src/
│   └── ticTacToe.js
├── tests/
│   └── ticTacToe.test.js
├── package.json
└── README.md
```


## Utilisation

Pour exécuter le jeu, vous pouvez importer la classe TicTacToe et l'utiliser dans votre code JavaScript.

### Exemple :
```
const TicTacToe = require('./src/ticTacToe');

const game = new TicTacToe();
game.makeMove(0, 0, 'X');
console.log(game.board);

```

## Tests

Pour exécuter les tests unitaires, utilisez la commande suivante :

```
npm test
```