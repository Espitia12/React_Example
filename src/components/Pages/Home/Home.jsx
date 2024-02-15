import React from 'react'
import {Header} from '../../Layout/Header/Header'
import { Logo } from '../../Logo/Logo'
import { Items } from '../../Items/Items'
import { Navbar } from '../../Navbar/Navbar'
import { Main } from '../../Layout/Main/Main'
import { DescripttionProfile } from '../../DescriptionProfile/DescripttionProfile'
import { PictureProfile } from '../../PictureProfile/PictureProfile'




export const Home = () => {
  return (
    <>
    <Header>
      <Logo />
      <h1>league Of Leguends</h1>      
      <Navbar>
        <Items content="hola"/>
        <Items content="hola"/>
        <Items content="hola"/>
       </Navbar>
    </Header>
    <Main>
      <PictureProfile/>
      <DescripttionProfile/>
    </Main>
    </>
  )
}
