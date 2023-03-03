import { Component } from 'react'

export default class EventosES6 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contador: 0
    }

    // En ES6 para poder usar un metodo para variar el estado que se hacia en el constructor se tenia que vicular el metodo con el "this"
    // Este hace referencia a la propias propiedades de las clases "hace referencia al objeto en cuestión"
    // Para vuncular al metodo con la clase se utiliza el metodo "bind"
    // El cual se utilizara dentro del constructor
    this.sumar = this.sumar.bind(this)
    this.restar = this.restar.bind(this)
  }

  sumar(e) {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  restar(e) {
    this.setState({
      contador: this.state.contador - 1
    })
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    )
  }
}
