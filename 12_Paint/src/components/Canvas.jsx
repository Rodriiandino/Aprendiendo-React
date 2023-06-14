export default function Canvas({ canvasRef, screenSize }) {
  return (
    <>
      <div className='canvas__conteiner'>
        <canvas
          ref={canvasRef}
          id='canvas'
          style={{
            width: screenSize,
            height: '500px'
          }}
        />
      </div>
    </>
  )
}
