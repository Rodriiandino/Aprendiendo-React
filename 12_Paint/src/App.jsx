import './App.css'
import { useRef, useEffect, useState } from 'react'

const DEFAULT_BRUSH_COLOR = '#000000'
const BRUSH_SIZE = 10

export default function App() {
  const canvasRef = useRef(null)
  const [enabled, setEnabled] = useState(false)
  const [brushColor, setBrushColor] = useState(DEFAULT_BRUSH_COLOR)
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 })
  const [canvasContent, setCanvasContent] = useState(null)

  useEffect(() => {
    const canvas = canvasRef.current

    // Tamaño del canvas igual al tamaño del contenedor
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    const handleResize = () => {
      // actualizar el tamaño del canvas
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight

      // Redibujar el canvas
      const img = new Image()
      img.onload = () => {
        context.drawImage(img, 0, 0)
      }
      img.src = canvasContent
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [canvasContent])

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    const handlePointerDown = e => {
      if (!enabled) return

      const rect = canvas.getBoundingClientRect()
      context.beginPath()
      context.strokeStyle = brushColor
      context.moveTo(e.clientX - rect.left, e.clientY - rect.top)
      context.lineWidth = BRUSH_SIZE
      context.lineCap = 'round'
      context.lineJoin = 'round'
    }

    const handlePointerMove = e => {
      if (!enabled || e.buttons !== 1) return

      const rect = canvas.getBoundingClientRect()
      context.lineTo(e.clientX - rect.left, e.clientY - rect.top)
      context.stroke()
    }

    const handlePointerUp = () => {
      setCanvasContent(canvas.toDataURL())
    }

    canvas.addEventListener('pointerdown', handlePointerDown)
    canvas.addEventListener('pointermove', handlePointerMove)
    canvas.addEventListener('pointerup', handlePointerUp)

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown)
      canvas.removeEventListener('pointermove', handlePointerMove)
      canvas.removeEventListener('pointerup', handlePointerUp)
    }
  }, [enabled, brushColor])

  useEffect(() => {
    const handleMove = e => {
      setPointerPosition({ x: e.clientX, y: e.clientY })
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
    setCanvasContent(null)
  }

  return (
    <>
      {enabled && (
        <div
          style={{
            position: 'absolute',
            backgroundColor: brushColor,
            borderRadius: '50%',
            opacity: 0.6,
            transform: `translate(${pointerPosition.x}px, ${pointerPosition.y}px)`,
            pointerEvents: 'none',
            left: -BRUSH_SIZE / 2,
            top: -BRUSH_SIZE / 2,
            width: BRUSH_SIZE,
            height: BRUSH_SIZE
          }}
        />
      )}

      <h1>PAINT</h1>

      <canvas
        ref={canvasRef}
        id='canvas'
        style={{
          width: '60%',
          height: '60%'
        }}
      />
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
