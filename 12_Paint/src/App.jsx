import './App.css'
import { useRef, useEffect, useState } from 'react'

export default function App() {
  // Posicion del puntero
  const [position, setPosition] = useState({ x: 0, y: 0 })
  // Si el puntero esta activado o no
  const [enabled, setEnabled] = useState(false)
  // Estado para almacenar el color del pincel
  const [brushColor, setBrushColor] = useState('#000000')

  // Referencia al canvas
  const canvasRef = useRef(null)

  useEffect(() => {
    // Obtenemos el canvas y el contexto
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    // Establecemos el tamaño del canvas
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight

    // Obtenemos la posicion del canvas
    let rect = canvas.getBoundingClientRect()

    const handlePointerDown = e => {
      if (!enabled) return

      // Empezamos un nuevo path
      context.beginPath()

      // Establecemos el color del pincel
      context.strokeStyle = brushColor

      // Movemos el puntero a la posicion del puntero
      context.moveTo(e.clientX - rect.left, e.clientY - rect.top)

      context.lineWidth = 10
      context.lineCap = 'round'
      context.lineJoin = 'round'
    }

    const handlePointerMove = e => {
      if (!enabled || e.buttons !== 1) return

      // Dibujamos una linea desde la posicion anterior hasta la nueva
      context.lineTo(e.clientX - rect.left, e.clientY - rect.top)
      context.stroke()
    }

    const handleResize = () => {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
      rect = canvas.getBoundingClientRect()
    }

    window.addEventListener('resize', handleResize)
    canvas.addEventListener('pointerdown', handlePointerDown)
    canvas.addEventListener('pointermove', handlePointerMove)

    // Limpiamos los eventos al desmontar el componente
    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown)
      canvas.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [enabled, brushColor])

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
          display: enabled ? 'block' : 'none',
          backgroundColor: `${brushColor}`,
          borderRadius: '50%',
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: 'none',
          left: -5,
          top: -5,
          width: 20,
          height: 20
        }}
      />

      <h1>PAINT</h1>

      <canvas
        ref={canvasRef}
        id='canvas'
        style={{
          width: '60%',
          height: '60%'
        }}
      ></canvas>

      <div>
        <button onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Desactivar' : 'Activar'} seguir puntero
        </button>

        <button onClick={clearCanvas}>Limpiar canvas</button>

        <input
          type='color'
          value={brushColor}
          onChange={e => setBrushColor(e.target.value)}
        />
      </div>
    </>
  )
}
