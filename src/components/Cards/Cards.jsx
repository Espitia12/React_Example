import React from 'react'
import "./Cards.css"


export const Cards = ({img,titleCard,description}) => {
  return (
    <div className='contentCards'>
        <img className='imgcard' src={img} alt={titleCard} />
        <div className='TitleDescriptionCard'>
            <h2>{titleCard}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}
