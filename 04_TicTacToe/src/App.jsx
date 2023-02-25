import './App.css';
import { useState } from 'react';

const TURNS = {
  X: 'X',
  O: 'O',
};

function Square({ value, onHandleClick }) {
  //Creo una funcion "square" donde recibira 2 parametros
  //"value" Sera el atributo que imprimira el boton
  //"onHandleClick" es una props que representa eventos
  //en este caso representa una funcial la cual cambiara el valor del atrubito "value" cuando el boton se aprete
  return (
    <button className="square" onClick={onHandleClick}>
      {value}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function checkEndGame(squares) {
  return squares.every((square) => square !== null);
}

function State({ winner, newTurn, resetGame }) {
  let status;
  let nextStatus;
  let textPlayer;

  if (winner) {
    if (winner == 'O') {
      status = <strong className="circle">'O'</strong>;
    } else {
      status = <strong className="cross">'X'</strong>;
    }
    textPlayer = 'El ganador es ';
  } else if (winner === null) {
    nextStatus = newTurn == 'X' ? 'X' : 'O';

    if (nextStatus == 'O') {
      status = <strong className="circle">'O'</strong>;
    } else {
      status = <strong className="cross">'X'</strong>;
    }

    textPlayer = 'Siguiente Jugador es ';
  } else {
    textPlayer = 'Empate';
  }

  return (
    <>
      <section>
        <h2 className="player">
          {textPlayer}
          {status}
        </h2>
      </section>
      <footer>
        <button onClick={resetGame}>Empezar de Nuevo</button>
      </footer>
    </>
  );
}

function saveGame({ squares, turn, winner }) {
  window.localStorage.setItem('squares', JSON.stringify(squares));
  window.localStorage.setItem('turn', turn);
  window.localStorage.setItem('winner', winner);
}

function resetGameFromStores() {
  window.localStorage.removeItem('squares');
  window.localStorage.removeItem('turn');
  window.localStorage.removeItem('winner');
}

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
    return winnerFromStorage == (TURNS.X || TURNS.O || false)
      ? winnerFromStorage
      : null;
  });

  function resetGame() {
    setSquares(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameFromStores();
  }

  function handleClick(i) {
    console.log(winner);
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
    </>
  );
}
