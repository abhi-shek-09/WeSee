import React from 'react'
import { HomeNavbar, ProfileBody } from '../../Components' 
import './Profile.css'
function Profile() {
  return (
    <div className='profile'>
        <HomeNavbar/>
        <div className='company-details'>
            <ProfileBody/>
        </div>
    </div>
  )
}

export default Profile