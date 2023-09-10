export default function CanvasSizes({ SetscreenSize }) {
  const handleSizeChange = size => {
    SetscreenSize(size)
  }

  return (
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
  )
}
