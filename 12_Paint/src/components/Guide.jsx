import { useState, useEffect } from 'react'

export default function Guide({ enabled, brushColor, brushSize }) {
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = e => {
      setPointerPosition({ x: e.clientX, y: e.clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

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
