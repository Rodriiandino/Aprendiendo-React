import './App.css'
import { useRef, useEffect, useState } from 'react'

export default function App() {
  // Posicion del puntero
  const [position, setPosition] = useState({ x: 0, y: 0 })
  // Si el puntero esta activado o no
  const [enabled, setEnabled] = useState(false)

  // Referencia al canvas
  const canvasRef = useRef(null)

  useEffect(() => {
    // Obtenemos el canvas y el contexto
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    // Obtenemos la posicion del canvas
    const rect = canvas.getBoundingClientRect()

    const handlePointerDown = e => {
      if (!enabled) return

      // Empezamos un nuevo path
      context.beginPath()

      // Movemos el puntero a la posicion del puntero
      context.moveTo(e.clientX - rect.left, e.clientY - rect.top)

      context.lineWidth = 10
      context.lineCap = 'round'
      context.lineJoin = 'round'
      context.strokeStyle = '#ffffff'
    }

    const handlePointerMove = e => {
      if (!enabled || e.buttons !== 1) return

      // Dibujamos una linea desde la posicion anterior hasta la nueva
      context.lineTo(e.clientX - rect.left, e.clientY - rect.top)
      context.stroke()
    }

    canvas.addEventListener('pointerdown', handlePointerDown)
    canvas.addEventListener('pointermove', handlePointerMove)

    // Limpiamos los eventos al desmontar el componente
    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown)
      canvas.removeEventListener('pointermove', handlePointerMove)
    }
  }, [enabled])

  useEffect(() => {
    const handleMove = e => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  const clearCanvas = () => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.clearRect(0, 0, canvas.width, canvas.height)
  }

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

      <canvas ref={canvasRef} id='canvas' width={500} height={500}></canvas>

      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>

      <button onClick={clearCanvas}>Limpiar canvas</button>
    </>
  )
}
