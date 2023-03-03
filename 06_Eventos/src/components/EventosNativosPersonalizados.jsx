import { Component } from 'react'

/* function Boton(props) {
  return <button onClick={props.myOnClick}>Botón hecho componente</button>;
} */

/* const Boton = (props) => (
  <button onClick={props.myOnClick}>Botón hecho componente</button>
); */

const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Botón hecho componente</button>
)
// Distintas formas para declarar un funcion
// Una más corta que la otra

export class Eventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e)
    // "e" es por Evento
    // "e" va hacer referencia los eventos que trae React
    console.log(e.nativeEvent)
    // Para hacer referencia a los eventos nativos de "JS" se usa "e.nativeEvent"
    console.log(mensaje)
  }

  render() {
    return (
      <div>
        <h2>Eventos Nativos, Sintéticos & Personalizados</h2>

        <button
          onClick={e =>
            this.handleClick(e, 'Hola pasando parámetro desde un evento')
          }
        >
          Saludar
        </button>
        {/* Para etiqueta HTML se le podia pasar propiedad onClick para ejecutar la funcion */}

        {/* Pero al renderizar algo esto pasa a ser JSX, y para ello se le tiene que usar un PROPS */}
        <Boton
          myOnClick={e =>
            this.handleClick(e, 'Hola pasando parámetro desde un evento')
          }
        />
      </div>
    )
  }
}
