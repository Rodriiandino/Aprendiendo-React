export default function Canvas({ canvasRef, screenSize }) {
  return (
    <>
      <canvas
        ref={canvasRef}
        id='canvas'
        style={{
          width: screenSize,
          height: '60%'
        }}
      />
    </>
  )
}
