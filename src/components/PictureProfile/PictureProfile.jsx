import React from 'react'
import pictureProfile from '../../assets/profile.jpg'
import "./PictureProfile.css"

export const PictureProfile = () => {
  return (
    <section>
        <img className='picture' src= {pictureProfile} alt="Profile" />
    </section>
  )
}
