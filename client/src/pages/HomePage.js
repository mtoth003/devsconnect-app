import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import PostContainer from '../components/PostContainer'

function HomePage({currentUser, setCurrentUser, name}) {

  return (
    <div className="home-container">
      
    <div className="home-title">
      <h2 className="page-title">Dev<em>Connect</em></h2>
    </div>
    <div className="home-nav">
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    </div>
    <div>
      <img className="prof-photo-home" src={currentUser.image_url} />
    </div>
    <div className="home-posts">
      <PostContainer currentUser={currentUser} name={name}/>
    </div>
  </div>
  )
}

export default HomePage