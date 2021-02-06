import React, { useEffect, useState } from 'react'
import { draw } from './draw_line'
const Line = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    setData([
      { x: 1.1, y: Math.random().toFixed(2) * 10 },
      { x: 1.2, y: Math.random().toFixed(2) * 10 },
      { x: 1.3, y: Math.random().toFixed(2) * 10 },
      { x: 1.4, y: Math.random().toFixed(2) * 10 },
      { x: 1.6, y: Math.random().toFixed(2) * 10 },
      { x: 1.7, y: Math.random().toFixed(2) * 10 },
      { x: 1.9, y: Math.random().toFixed(2) * 10 },
      { x: 2.0, y: Math.random().toFixed(2) * 10 },
    ])
    // setInterval(() => {
    //   setData([
    //     { x: 1.1, y: 2 + Math.random().toFixed(2) * 10 },
    //     { x: 1.2, y: 4 + Math.random().toFixed(2) * 10 },
    //     { x: 1.3, y: 4 + Math.random().toFixed(2) * 10 },
    //     { x: 1.4, y: 8 + Math.random().toFixed(2) * 10 },
    //     { x: 1.6, y: 4 + Math.random().toFixed(2) * 10 },
    //     { x: 1.7, y: 3 + Math.random().toFixed(2) * 10 },
    //     { x: 1.9, y: 6 + Math.random().toFixed(2) * 10 },
    //     { x: 2.0, y: 5 + Math.random().toFixed(2) * 10 },
    //   ])
    // }, 1000);
  }, [])

  useEffect(() => {
    draw({
      width: 300, height: 200, data
    })
  }, [data])

  return (
    <div style={{ background: '#fff' }}>
      <div id='line_box'></div>
    </div>
  )
}

export default Line;