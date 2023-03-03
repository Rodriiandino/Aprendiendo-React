import { Component } from 'react'

export default class EventosES7 extends Component {
  state = {
    contador: 0
  }

  // Apartir de ES7 ya no es necesario utilizar el constructor para declarar el estado
  // Y tampoco el bind en el metodo
  // Eso es porque la arrow functions hace referencia ya al this de la clase y no el global

  // Arrow  functions
  sumar = e => {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  restar = e => {
    this.setState({
      contador: this.state.contador - 1
    })
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    )
  }
}
