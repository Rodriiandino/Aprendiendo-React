import './App.css'
import Guide from './components/Guide'
import CanvasSizes from './components/CanvasSizes'
import Canvas from './components/Canvas'
import Options from './components/Options'
import Footer from './components/Footer'
import useCanvas from './components/hook/useCanvas'

import { useState } from 'react'

export default function App() {
  const [screenSize, SetscreenSize] = useState(0)

  const isMobileDevice = /Mobi/i.test(navigator.userAgent)

  const {
    canvasRef,
    setCanvasContent,
    enabled,
    setEnabled,
    brushColor,
    setBrushColor,
    brushSize,
    setBrushSize
  } = useCanvas({ screenSize })

  return (
    <>
      <header>
        <h1>PAINT</h1>
        {isMobileDevice ? (
          <p>Mobile device detected, canvas size is 100%.</p>
        ) : (
          <CanvasSizes SetscreenSize={SetscreenSize} />
        )}
      </header>

      {!isMobileDevice && (
        <Guide
          enabled={enabled}
          brushColor={brushColor}
          brushSize={brushSize}
        />
      )}

      <Canvas
        canvasRef={canvasRef}
        screenSize={isMobileDevice ? '100%' : screenSize}
      />

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
