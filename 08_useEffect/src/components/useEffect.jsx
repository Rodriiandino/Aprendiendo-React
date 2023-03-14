import { useEffect, useState } from 'react'

/*
    useEffect se usa para ejecutar código cuando se renderiza el
    componente o cuando cambian las dependencias del efecto.

  useEffect(() => {

   ---> Configuracion
    La función que se ejecutará al cambiar las dependencias o al
    renderizar el componente.

  }, [dependencias])  
    Un array de dependencias. Si cambia el valor de alguna dependencia,
    ejecutará la función.

*/

export const UseEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [enabled, setEnabled] = useState(false)

  // useEffect es un Hook, por lo que sólo puedes llamarlo en el nivel superior de tu componente o en tus propios Hooks.
  // No puedes llamarlo dentro de bucles o condiciones. Si lo necesitas, extrae un nuevo componente y mueve el estado a él.

  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // Codigo de Limpieza, que se ejecutara cuando cuambie la dependencia
    // o de desmonte el componente
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled]) // Cuando cambio el valor, se ejecutara la dependencia

  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#123456',
          borderRadius: '50%',
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40
        }}
      />

      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}
