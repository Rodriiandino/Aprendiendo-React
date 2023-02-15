import './App.css';
import { useState } from 'react';

function Square({ value, handleClick }) {
  //Creo una funcion "square" donde recibira 2 parametros
  //"value" Sera el atributo que imprimira el boton
  //"handleClick" esa una funcial el cual cambiara el valor del atrubito "value" cuando el boton se aprete
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  //En una variable creamos un useState en el cual se creara un Array de 9 posiciones "matrix".
  //Ademas llenamos todo el array con "null"
  //squares almacenara el valor y el setSquares cambiara su valor

  function handleClick(i) {
    //En la funcion handleClick() recibira un parametro el cual se usara para navegar por el array
    const listSquares = squares.slice();
    //El método splice() permite cambiar el contenido del arreglo eliminando o sustituyendo los elementos existentes por otros nuevos.
    listSquares[i] = 'x';
    setSquares(listSquares);
  }

  return (
    <>
      <h1>TIC-TAC-TOE</h1>
      <section className="tictactoe">
        <table>
          <tbody>
            <tr className="board-row">
              <td className="td-bottom td-right">
                <Square value={squares[0]} handleClick={() => handleClick(0)} />
              </td>
              <td className="td-bottom td-right td-left">
                <Square value={squares[1]} handleClick={() => handleClick(1)} />
              </td>
              <td className="td-bottom td-left">
                <Square value={squares[2]} handleClick={() => handleClick(2)} />
              </td>
            </tr>

            <tr className="board-row">
              <td className="td-bottom td-right td-top">
                <Square value={squares[3]} handleClick={() => handleClick(3)} />
              </td>
              <td className="td-bottom td-right td-left td-top">
                <Square value={squares[4]} handleClick={() => handleClick(4)} />
              </td>
              <td className="td-bottom td-left td-top">
                <Square value={squares[5]} handleClick={() => handleClick(5)} />
              </td>
            </tr>

            <tr className="board-row">
              <td className="td-right td-top">
                <Square value={squares[6]} handleClick={() => handleClick(6)} />
              </td>
              <td className="td-right td-left td-top">
                <Square value={squares[7]} handleClick={() => handleClick(7)} />
              </td>
              <td className="td-left td-top">
                <Square value={squares[8]} handleClick={() => handleClick(8)} />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
