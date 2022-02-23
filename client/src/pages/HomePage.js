import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import PostContainer from '../components/PostContainer'
import Search from '../components/Search'

function HomePage({currentUser, setCurrentUser, name}) {

  console.log(currentUser)

  return (
    <div className="home-container">
      
    <div className="home-title">
      <h4>User: <em style={{color: "red"}}>{currentUser.username}</em></h4>
      <h2 className="page-title">devs<em>Connect</em></h2>
    </div>
    <div className="home-nav">
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    </div>
    <div className='prof-photo-container'>
      <img className="prof-photo-home" src={currentUser.image_url} />
    </div>
    <div className="home-posts">
      <PostContainer currentUser={currentUser} name={name}/>
    </div>
  </div>
  )
}

export default HomePage