import './App.css'
import Guide from './components/Guide'
import Canvas from './components/Canvas'
import Options from './components/Options'
import Footer from './components/Footer'
import useCanvas from './components/hook/useCanvas'

export default function App() {
  const {
    canvasRef,
    setCanvasContent,
    enabled,
    setEnabled,
    brushColor,
    setBrushColor,
    pointerPosition,
    brushSize,
    setBrushSize
  } = useCanvas()

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
