import './App.css';
import { useState } from 'react';
import { Square } from './components/Square';
import { calculateWinner, checkEndGame } from './components/endGame';
import { saveGame, resetGameFromStores } from './components/storage';
import { State } from './components/State';
import github from './assets/github.svg';

const TURNS = {
  X: 'X',
  O: 'O',
};

export default function App() {
  const [squares, setSquares] = useState(() => {
    const squaresFromStores = window.localStorage.getItem('squares');
    return squaresFromStores
      ? JSON.parse(squaresFromStores)
      : Array(9).fill(null);
  });
  //En una variable creamos un useState en el cual se creara un Array de 9 posiciones "matrix".
  //Ademas llenamos todo el array con "null"
  //squares almacenara el valor y el setSquares cambiara su valor

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ? turnFromStorage : TURNS.X;
  });
  //Con este useState se usara para verificar si se imprimira un circulo o un cuadrado
  //si el valor de turn es true imprimira un cuadrado en caso contrario sera un circulo

  const [winner, setWinner] = useState(() => {
    const winnerFromStorage = window.localStorage.getItem('winner');
    if (winnerFromStorage === TURNS.X) return winnerFromStorage;
    if (winnerFromStorage === TURNS.O) return winnerFromStorage;
    return null;
  });

  function resetGame() {
    setSquares(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameFromStores();
  }

  function handleClick(i) {
    if (squares[i] || winner) return;

    //En la funcion handleClick() recibira un parametro el cual se usara para navegar por el array
    const listSquares = squares.slice();
    //El método splice() permite cambiar el contenido del arreglo eliminando o sustituyendo los elementos existentes por otros nuevos.

    listSquares[i] = turn;
    setSquares(listSquares);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = calculateWinner(listSquares);

    // Guardar Partida
    saveGame({
      squares: listSquares,
      turn: newTurn,
      winner: newWinner,
    });

    if (newWinner) {
      setWinner(newWinner);
    } else if (checkEndGame(listSquares)) {
      setWinner(false);
    }
  }

  return (
    <>
      <h1>TIC-TAC-TOE</h1>
      <section className="tictactoe">
        <table>
          <tbody>
            <tr className="board-row">
              <td className="td-bottom td-right">
                <Square
                  value={squares[0]}
                  onHandleClick={() => handleClick(0)}
                  //En React, es convencional usar nombres on[Event] para props que representan eventos y handle[Event] para las definiciones de funciones que manejan los eventos.
                />
              </td>
              <td className="td-bottom td-right td-left">
                <Square
                  value={squares[1]}
                  onHandleClick={() => handleClick(1)}
                />
              </td>
              <td className="td-bottom td-left">
                <Square
                  value={squares[2]}
                  onHandleClick={() => handleClick(2)}
                />
              </td>
            </tr>

            <tr className="board-row">
              <td className="td-bottom td-right td-top">
                <Square
                  value={squares[3]}
                  onHandleClick={() => handleClick(3)}
                />
              </td>
              <td className="td-bottom td-right td-left td-top">
                <Square
                  value={squares[4]}
                  onHandleClick={() => handleClick(4)}
                />
              </td>
              <td className="td-bottom td-left td-top">
                <Square
                  value={squares[5]}
                  onHandleClick={() => handleClick(5)}
                />
              </td>
            </tr>

            <tr className="board-row">
              <td className="td-right td-top">
                <Square
                  value={squares[6]}
                  onHandleClick={() => handleClick(6)}
                />
              </td>
              <td className="td-right td-left td-top">
                <Square
                  value={squares[7]}
                  onHandleClick={() => handleClick(7)}
                />
              </td>
              <td className="td-left td-top">
                <Square
                  value={squares[8]}
                  onHandleClick={() => handleClick(8)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <State winner={winner} newTurn={turn} resetGame={resetGame} />
      <footer>
        <a
          className="github"
          href="https://github.com/Rodriiandino/Aprendiendo-React/tree/main/04_TicTacToe"
          target="_blank"
        >
          <img src={github} alt="github" />
        </a>
      </footer>
    </>
  );
}
