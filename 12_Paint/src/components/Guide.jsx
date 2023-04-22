export default function Guide({
  enabled,
  brushColor,
  pointerPosition,
  brushSize
}) {
  return (
    <>
      {enabled && (
        <div
          style={{
            position: 'absolute',
            backgroundColor: brushColor,
            borderRadius: '50%',
            opacity: 0.6,
            transform: `translate(${pointerPosition.x}px, ${pointerPosition.y}px)`,
            pointerEvents: 'none',
            left: -brushSize / 2,
            top: -brushSize / 2,
            width: brushSize + 'px',
            height: brushSize + 'px'
          }}
        />
      )}
    </>
  )
}
