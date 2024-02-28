import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Items.css"


export const Items = ({content,route}) => <li><NavLink to ={route}>{content}</NavLink></li>
