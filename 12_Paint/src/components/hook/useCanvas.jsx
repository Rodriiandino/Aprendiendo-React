import { useEffect, useRef, useState } from 'react'

const DEFAULT_BRUSH_COLOR = '#000000'
const DEFAULT_BRUSH_SIZE = 10

export default function useCanvas({ screenSize }) {
  const canvasRef = useRef(null)
  const [canvasContent, setCanvasContent] = useState(null)
  const [enabled, setEnabled] = useState(false)
  const [brushColor, setBrushColor] = useState(DEFAULT_BRUSH_COLOR)
  const [brushSize, setBrushSize] = useState(DEFAULT_BRUSH_SIZE)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    // Tamaño del canvas igual al tamaño del contenedor
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight

    // Redibujar el canvas
    const img = new Image()
    img.onload = () => {
      context.drawImage(img, 0, 0)
    }
    img.src = canvasContent
  }, [screenSize])

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    const handleResize = () => {
      // Actualizar el tamaño del canvas
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

      const canvasRect = canvas.getBoundingClientRect()
      const offsetX = e.clientX - canvasRect.left
      const offsetY = e.clientY - canvasRect.top

      context.beginPath()
      context.strokeStyle = brushColor
      context.moveTo(offsetX, offsetY)
      context.lineWidth = brushSize
      context.lineCap = 'round'
      context.lineJoin = 'round'
    }

    const handlePointerMove = e => {
      if (!enabled || e.buttons !== 1) return

      const canvasRect = canvas.getBoundingClientRect()
      const offsetX = e.clientX - canvasRect.left
      const offsetY = e.clientY - canvasRect.top

      context.lineTo(offsetX, offsetY)
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
  }, [enabled, brushColor, brushSize])

  return {
    canvasRef,
    setCanvasContent,
    enabled,
    setEnabled,
    brushColor,
    setBrushColor,
    brushSize,
    setBrushSize
  }
}
