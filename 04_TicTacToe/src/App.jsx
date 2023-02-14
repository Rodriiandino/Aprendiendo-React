import './App.css';

function App() {
  return (
    <>
      <h1>TIC-TAC-TOE</h1>
      <section className="tictactoe">
        <table>
          <tbody>
            <tr>
              <td className="td-bottom td-right">
                <button className="square">1</button>
              </td>
              <td className="td-bottom td-right td-left">
                <button className="square">2</button>
              </td>
              <td className="td-bottom td-left">
                <button className="square">3</button>
              </td>
            </tr>
            <tr>
              <td className="td-bottom td-right td-top">
                <button className="square">4</button>
              </td>
              <td className="td-bottom td-right td-left td-top">
                <button className="square">5</button>
              </td>
              <td className="td-bottom td-left td-top">
                <button className="square">6</button>
              </td>
            </tr>
            <tr>
              <td className="td-right td-top">
                <button className="square">7</button>
              </td>
              <td className="td-right td-left td-top">
                <button className="square">8</button>
              </td>
              <td className="td-left td-top">
                <button className="square">9</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default App;
