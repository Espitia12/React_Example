import React from 'react'
import { Main } from '../../Layout/Main/Main'
import { Title } from '../../title/title'
import { Cards } from '../../Cards/Cards'
import profileImage from "../../../assets/profile.jpg"
import "./Proyectos.css"

export const Proyectos = () => {
  return (
    <Main>
        <Title title='PROYECTOS'/>
        <div className='content'>
        <Cards
        img={profileImage}
        titleCard="Titulo de Proyecto"
        description="cualquier descripcion que pueda tener un proyecto"
        />
        <Cards
        img={profileImage}
        titleCard="Titulo de Proyecto"
        description="cualquier descripcion que pueda tener un proyecto"
        />
        <Cards
        img={profileImage}
        titleCard="Titulo de Proyecto"
        description="cualquier descripcion que pueda tener un proyecto"
        />
        </div>
    </Main>
  )
}
