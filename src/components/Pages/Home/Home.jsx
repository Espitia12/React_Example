import React from 'react'
import {Header} from '../../Layout/Header/Header'
import { Logo } from '../../Logo/Logo'
import { Items } from '../../Items/Items'
import { Navbar } from '../../Navbar/Navbar'



export const Home = () => {
  return (
    <Header>
      <Logo />
      <h1>league Of Leguends</h1>      
      <Navbar>
        <Items content="hola"/>
        <Items content="hola"/>
        <Items content="hola"/>
       </Navbar>
    </Header>
  )
}