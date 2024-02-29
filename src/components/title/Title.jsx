import React from 'react'
import { LogoSena } from '../Logo-Sena/Logo_Sena'
import "./Title.css"

export const Title = ({title}) => {
  return (

    <div className='contentLTitlE'>
        <div className='LogTiltle'>
          <LogoSena/>
          <h1>{title}</h1>
        </div>
        <hr />
    </div>
  )
}
