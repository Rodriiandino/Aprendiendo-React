export default function ClearCanvas({ canvasRef, setCanvasContent }) {
  const clearCanvas = () => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.clearRect(0, 0, canvas.width, canvas.height)
    setCanvasContent(null)
  }

  return <button onClick={clearCanvas}>Limpiar canvas</button>
}
