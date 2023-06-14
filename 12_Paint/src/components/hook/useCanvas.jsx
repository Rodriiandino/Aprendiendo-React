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

    const isMobileDevice = /Mobi/i.test(navigator.userAgent)

    const handlePointerDown = e => {
      if (!enabled) return

      const canvasRect = canvas.getBoundingClientRect()
      let offsetX, offsetY

      if (isMobileDevice) {
        offsetX = e.touches[0].clientX - canvasRect.left
        offsetY = e.touches[0].clientY - canvasRect.top
      } else {
        offsetX = e.clientX - canvasRect.left
        offsetY = e.clientY - canvasRect.top
      }

      context.beginPath()
      context.strokeStyle = brushColor
      context.moveTo(offsetX, offsetY)
      context.lineWidth = brushSize
      context.lineCap = 'round'
      context.lineJoin = 'round'
    }

    const handlePointerMove = e => {
      if (isMobileDevice) {
        if (e.touches.length !== 1 || !enabled) return
      } else {
        if (e.buttons !== 1 || !enabled) return
      }

      const canvasRect = canvas.getBoundingClientRect()
      let offsetX, offsetY

      if (isMobileDevice) {
        offsetX = e.touches[0].clientX - canvasRect.left
        offsetY = e.touches[0].clientY - canvasRect.top
      } else {
        offsetX = e.clientX - canvasRect.left
        offsetY = e.clientY - canvasRect.top
      }

      context.lineTo(offsetX, offsetY)
      context.stroke()
    }

    const handlePointerUp = () => {
      setCanvasContent(canvas.toDataURL())
    }

    if (isMobileDevice) {
      canvas.addEventListener('touchstart', handlePointerDown)
      canvas.addEventListener('touchmove', handlePointerMove)
      canvas.addEventListener('touchend', handlePointerUp)
    } else {
      canvas.addEventListener('mousedown', handlePointerDown)
      canvas.addEventListener('mousemove', handlePointerMove)
      canvas.addEventListener('mouseup', handlePointerUp)
    }

    return () => {
      if (isMobileDevice) {
        canvas.removeEventListener('touchstart', handlePointerDown)
        canvas.removeEventListener('touchmove', handlePointerMove)
        canvas.removeEventListener('touchend', handlePointerUp)
      } else {
        canvas.removeEventListener('mousedown', handlePointerDown)
        canvas.removeEventListener('mousemove', handlePointerMove)
        canvas.removeEventListener('mouseup', handlePointerUp)
      }
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
