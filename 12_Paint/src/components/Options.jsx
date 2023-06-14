import ClearCanvas from './ClearCanvas'

export default function Options({
  setEnabled,
  enabled,
  canvasRef,
  setCanvasContent,
  brushColor,
  setBrushColor,
  brushSize,
  setBrushSize
}) {
  return (
    <>
      <div className='options'>
        <div className='option'>
          <button onClick={() => setEnabled(!enabled)}>
            {enabled ? 'Desactivar' : 'Activar'} puntero
          </button>

          <ClearCanvas
            canvasRef={canvasRef}
            setCanvasContent={setCanvasContent}
          />

          <input
            type='color'
            value={brushColor}
            onChange={e => setBrushColor(e.target.value)}
          />
        </div>

        <div className='range'>
          <label htmlFor='brushSize'>{brushSize}</label>
          <input
            id='brushSize'
            type='range'
            value={brushSize}
            min='1'
            max='100'
            onChange={e => setBrushSize(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}
