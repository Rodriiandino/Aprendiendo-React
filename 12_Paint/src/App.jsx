import './App.css'
import Guide from './components/Guide'
import Canvas from './components/Canvas'
import Options from './components/Options'
import Footer from './components/Footer'
import useCanvas from './components/hook/useCanvas'

import { useState } from 'react'

export default function App() {
  const [screenSize, SetscreenSize] = useState(0)

  const handleSizeChange = size => {
    SetscreenSize(size)
  }

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
        <div>
          <ul className='canvas__sizes'>
            <li>
              <button onClick={() => handleSizeChange('1200px')}>1200px</button>
            </li>
            <li>
              <button onClick={() => handleSizeChange('900px')}>900px</button>
            </li>
            <li>
              <button onClick={() => handleSizeChange('600px')}>600px</button>
            </li>
            <li>
              <button onClick={() => handleSizeChange('300px')}>300px</button>
            </li>
          </ul>
        </div>
      </header>

      <Guide enabled={enabled} brushColor={brushColor} brushSize={brushSize} />

      <Canvas canvasRef={canvasRef} screenSize={screenSize} />

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
