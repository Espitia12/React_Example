import React from 'react'

export const Cards = ({image,titleCard,description}) => {
  return (
    <div className='contentCards'>
        <img src={image} alt="" />
        <div className='TitleDescriptionCard'>
            <h2>{titleCard}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}
