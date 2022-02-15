import React from 'react'
import Post from '../components/Post'
import NavBar from '../components/NavBar'

function HomePage({posts, currentUser, setUser}) {
  const renderPosts = posts.map(post => {
    return <Post key={post.id} post={post} currentUser={currentUser}/>
  })
  return (
    <div className="home-container">
      
    <div className="home-title">
      <h2 className="page-title">Dev<em>Connect</em></h2>
    </div>
    <div className="home-nav">
      <NavBar currentUser={currentUser} setUser={setUser}/>
    </div>
    <div>
      <img className="prof-photo-home" src={currentUser.image_url} />
    </div>
    <div className="home-posts">
      {renderPosts}
    </div>
  </div>
  )
}

export default HomePage