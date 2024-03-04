import React from 'react'
import "./Cuadro.css"

export const Cuadro = ({name,carg,tel,correo}) => {
  return (
    <div className='contentReference'>
        <p className='name'>{name}</p>
        <p className='carg'>{carg}</p>
        <p className='tel'>{tel}</p>
        <p className='correo'>{correo}</p>
    </div>
  )
}
