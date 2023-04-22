import './App.css'
import { useRef, useEffect, useState } from 'react'
import Guide from './components/Guide'
import Canvas from './components/Canvas'
import Options from './components/Options'
import Footer from './components/Footer'

const DEFAULT_BRUSH_COLOR = '#000000'
const DEFAULT_BRUSH_SIZE = 10

export default function App() {
  const canvasRef = useRef(null)
  const [enabled, setEnabled] = useState(false)
  const [brushColor, setBrushColor] = useState(DEFAULT_BRUSH_COLOR)
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 })
  const [canvasContent, setCanvasContent] = useState(null)
  const [brushSize, setBrushSize] = useState(DEFAULT_BRUSH_SIZE)
  const [screenResize, setScreenResize] = useState(window.innerWidth)

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

      setScreenResize(window.innerWidth)

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
    const rect = canvas.getBoundingClientRect()

    const handlePointerDown = e => {
      if (!enabled) return

      context.beginPath()
      context.strokeStyle = brushColor
      context.moveTo(e.clientX - rect.left, e.clientY - rect.top)
      context.lineWidth = brushSize
      context.lineCap = 'round'
      context.lineJoin = 'round'
    }

    const handlePointerMove = e => {
      if (!enabled || e.buttons !== 1) return

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
  }, [enabled, brushColor, brushSize, screenResize])

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

  return (
    <>
      <h1>PAINT</h1>

      <Guide
        enabled={enabled}
        brushColor={brushColor}
        pointerPosition={pointerPosition}
        brushSize={brushSize}
      />

      <Canvas canvasRef={canvasRef} />

      <Options
        setEnabled={setEnabled}
        enabled={enabled}
        canvasRef={canvasRef}
        setCanvasContent={setCanvasContent}
        brushColor={brushColor}
        setBrushColor={setBrushColor}
        brushSize={brushSize}
        setBrushSize={setBrushSize}
      />

      <Footer />
    </>
  )
}
