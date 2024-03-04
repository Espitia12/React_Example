import React from 'react'
import { Main } from '../../Layout/Main/Main'
import { Cuadro } from '../../Cuadro/Cuadro'
import { Title } from '../../title/title'
import "./Reference.css"

export const Reference = () => {
  return (
    <Main>
      <Title/>
      <div className='content'>
       <Cuadro
         name="Nombre"
         carg="Cargo"
         tel="Telefono"
         correo="Correo"
       />
       <Cuadro
         name="Nombre"
         carg="Cargo"
         tel="Telefono"
         correo="Correo"
       />
       <Cuadro
         name="Nombre"
         carg="Cargo"
         tel="Telefono"
         correo="Correo"
       />
       <Cuadro
         name="Nombre"
         carg="Cargo"
         tel="Telefono"
         correo="Correo"
       />
      </div>
    </Main>
  )
}
