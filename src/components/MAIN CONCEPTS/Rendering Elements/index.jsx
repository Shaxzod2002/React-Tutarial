import React from 'react'

export default function RenderingElements() {
  return (
    <div className='text-center'>
      <h1 className='text-danger'> 
        {new Date().toLocaleTimeString()}
      </h1>
    </div>
  )
}
