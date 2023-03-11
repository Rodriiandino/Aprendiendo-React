import './App.css'

function App() {
  return (
    <div className='App'>
      <div>
        <h1>07_Hooks</h1>
        <p>Los Hooks son "Built-in" de React</p>
        <p>Se listaran una lista de todos los Hooks</p>
        <hr />
        <section>
          <h2>State Hooks</h2>
          <p>
            El estado permite que un componente <strong>"recuerde"</strong>{' '}
            información
          </p>
          <ul>
            <li>
              <p>
                <strong>useState</strong> declara una variable de estado que
                puede actualizar directamente.
              </p>
            </li>
            <li>
              <p>
                <strong>useReducer</strong> declara una variable de estado con
                la lógica de actualización dentro de una función reductora.
              </p>
            </li>
          </ul>
          <p>
            El <strong>useState</strong> es el que se uso en la sección{' '}
            <strong>03_Estados</strong> y para hacer el{' '}
            <strong>04_TicTacToe</strong>
          </p>
        </section>
        <hr />
        <section>
          <h2>Context Hooks</h2>
          <p>
            El contexto permite que un componente reciba información de padres
            distantes sin pasarla como accesorios.
          </p>
          <ul>
            <li>
              <p>
                <strong>useContext</strong> El contexto permite que un
                componente reciba información de padres distantes sin pasarla
                como accesorios.
              </p>
            </li>
          </ul>
        </section>
        <hr />
        <section>
          <h2>Ref Hooks</h2>
          <p>
            Las referencias permiten que un componente contenga información que
            no se usa para renderizar, como un nodo DOM o una ID de tiempo de
            espera. A diferencia del estado, la actualización de una referencia
            no vuelve a representar su componente.
          </p>
          <ul>
            <li>
              <p>
                <strong>useRef</strong>
                declara una ref. Puede contener cualquier valor, pero la mayoría
                de las veces se usa para contener un nodo DOM.
              </p>
            </li>
            <li>
              <p>
                <strong>useImperativeHandle</strong>
                le permite personalizar la referencia expuesta por su
                componente. Esto rara vez se usa.
              </p>
            </li>
          </ul>
        </section>
        <hr />
        <section>
          <h2>Effect Hooks</h2>
          <p>
            Los efectos permiten que un componente se conecte y se sincronice
            con sistemas externos. Esto incluye tratar con la red, el DOM del
            navegador, las animaciones, los widgets escritos con una biblioteca
            de interfaz de usuario diferente y, en general, cualquier código que
            no sea de React.
          </p>
          <ul>
            <li>
              <p>
                <strong>useEffect</strong> conecta un componente a un sistema
                externo.
              </p>
            </li>
            <li>
              <p>
                <strong>useLayoutEffect</strong> se dispara antes de que el
                navegador vuelva a pintar la pantalla. Puede medir el layout
                aquí.
              </p>
            </li>
            <li>
              <p>
                <strong>useInsertionEffect</strong> se dispara antes de que
                React realice cambios en el DOM. Las bibliotecas pueden insertar
                CSS dinámico aquí.
              </p>
            </li>
          </ul>
        </section>
        <hr />
        <section>
          <h2>Performance Hooks </h2>
          <p>
            Una forma habitual de optimizar el rendimiento de la renderización
            es omitir el trabajo innecesario. Por ejemplo, puede decirle a React
            que reutilice un cálculo almacenado en caché o que omita una nueva
            representación si los datos no han cambiado desde la representación
            anterior.
          </p>
          <h3>
            Para omitir cálculos y renderizaciones innecesarias, utilice uno de
            estos Hooks:
          </h3>
          <ul>
            <li>
              <p>
                <strong>useMemo</strong> le permite almacenar en caché el
                resultado de un cálculo costoso.
              </p>
            </li>
            <li>
              <p>
                <strong>useCallback</strong> le permite almacenar en caché una
                definición de función antes de pasarla a un componente
                optimizado.
              </p>
            </li>
          </ul>
          <h3>Para priorizar el renderizado, usa uno de estos Hooks:</h3>
          <ul>
            <li>
              <p>
                <strong>useTransition</strong> le permite marcar una transición
                de estado como no bloqueante y permitir que otras
                actualizaciones la interrumpan.
              </p>
            </li>
            <li>
              <p>
                <strong>useDeferredValue</strong> le permite aplazar la
                actualización de una parte no crítica de la interfaz de usuario
                y dejar que otras partes se actualicen primero.
              </p>
            </li>
          </ul>
        </section>
        <hr />
        <section>
          <h2>
            Estos Hooks son principalmente útiles para los autores de
            bibliotecas y no se usan comúnmente en el código de la aplicación.
          </h2>
          <ul>
            <li>
              <p>
                <strong>useDebugValue</strong> le permite personalizar la
                etiqueta que muestra React DevTools para su Hooks personalizado.
              </p>
            </li>
            <li>
              <p>
                <strong>useId</strong> permite que un componente asocie una ID
                única consigo mismo. Normalmente se usa con las API de
                accesibilidad.
              </p>
            </li>
            <li>
              <p>
                <strong>useSyncExternalStore</strong> permite que un componente
                se suscriba a una store externa.
              </p>
            </li>
          </ul>
        </section>
      </div>
      <p className='read-the-docs'>07_Hooks</p>
    </div>
  )
}

export default App
