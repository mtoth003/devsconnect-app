import {useState, useEffect} from 'react'
import Post from './Post'

function PostContainer({currentUser, name}) {
  const [posts, setPosts] = useState([])
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetch("api/posts")
    .then((r) => r.json())
    .then(data => setPosts(data))
  }, [])

  // useEffect(() => {
  //   fetch("api/favorites")
  //   .then(r => r.json())
  //   .then(data => setFavorites(data))
  // }, [])

  const filteredPosts = () => {
    if (name === "account") {
      return posts.filter(post => post.username === currentUser.username)
    // } else if (name === "favorties") {
    //   return posts.filter(post => post.usernmae === favorites.filter(fav => fav.username === currentUser.username))
    } else {
      return posts
    }
  }

  const renderPosts = filteredPosts().map(post => <Post key={post.id} post={post} currentUser={currentUser}/>)
  return (
    <div>{renderPosts}</div>
  )
}

export default PostContainer