export default function Canvas({ canvasRef }) {
  return (
    <>
      <canvas
        ref={canvasRef}
        id='canvas'
        style={{
          width: '60%',
          height: '60%'
        }}
      />
    </>
  )
}
