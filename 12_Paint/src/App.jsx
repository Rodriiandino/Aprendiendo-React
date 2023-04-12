import './App.css'
import { useRef, useEffect, useState } from 'react'

export default function App() {
  // Posicion del puntero
  const [position, setPosition] = useState({ x: 0, y: 0 })
  // Si el puntero esta activado o no
  const [enabled, setEnabled] = useState(false)
  // Estado para almacenar el color del pincel
  const [brushColor, setBrushColor] = useState('#ffffff')
  // Detecta al cambiar el tamaño de la ventana
  const [resize, setResize] = useState(window.innerWidth)

  // Referencia al canvas
  const canvasRef = useRef(null)

  useEffect(() => {
    // Obtenemos el canvas y el contexto
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Obtenemos la posicion del canvas
    const rect = canvas.getBoundingClientRect()

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
      setResize(window.innerWidth)
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
  }, [enabled, brushColor, resize])

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
          backgroundColor: `${brushColor}`,
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

      <canvas
        ref={canvasRef}
        id='canvas'
        style={{
          width: '60%',
          aspectRatio: '16/9'
        }}
      ></canvas>

      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>

      <button onClick={clearCanvas}>Limpiar canvas</button>

      <input
        type='color'
        value={brushColor}
        onChange={e => setBrushColor(e.target.value)}
      />
    </>
  )
}
