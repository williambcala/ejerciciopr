// script a realizar prueba unitaria
const whoWon = require('./whoWon');  

describe('Pruebas para la función whoWon', () => {
    test('Debería retornar "TIE!" cuando ambos jugadores eligen la misma opción', () => {
        expect(whoWon('rock', 'rock')).toBe('TIE!');
        expect(whoWon('paper', 'paper')).toBe('TIE!');
        expect(whoWon('scissors', 'scissors')).toBe('TIE!');
    });

    test('Debería retornar "Player 2 wins!" cuando Player 1 elige rock y Player 2 elige paper', () => {
        expect(whoWon('rock', 'paper')).toBe('Player 2 wins!');
    });

    test('Debería retornar "Player 2 wins!" cuando Player 1 elige paper y Player 2 elige scissors', () => {
        expect(whoWon('paper', 'scissors')).toBe('Player 2 wins!');
    });

    test('Debería retornar "Player 2 wins!" cuando Player 1 elige scissors y Player 2 elige rock', () => {
        expect(whoWon('scissors', 'rock')).toBe('Player 2 wins!');
    });

    test('Debería retornar "Player 1 wins!" para todas las demás combinaciones en las que gana Player 1', () => {
        expect(whoWon('rock', 'scissors')).toBe('Player 1 wins!');
        expect(whoWon('paper', 'rock')).toBe('Player 1 wins!');
        expect(whoWon('scissors', 'paper')).toBe('Player 1 wins!');
    });
});
