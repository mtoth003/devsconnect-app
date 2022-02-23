import {useState, useEffect} from 'react'
import Post from './Post'
import Search from './Search'

function PostContainer({currentUser, name}) {
  const [search, setSearch] = useState('')
  const [posts, setPosts] = useState([])


  useEffect(() => {
    fetch("api/posts")
    .then((r) => r.json())
    .then(data => setPosts(data))
  }, [])

  const filteredPosts = () => {
    if (name === "account") {
      return posts.filter(post => post.username === currentUser.username)
  } else {
      return posts
    }
  }

  const searchPosts = posts.filter(post => post.header.toLowerCase().includes(search.toLocaleLowerCase()))
  
  const renderPosts = filteredPosts().map(post => <Post key={post.id} post={post} currentUser={currentUser} />)

  const renderSearchPosts = searchPosts.map(post => <Post key={post.id} post={post} currentUser={currentUser} />)

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      {search === "" ? renderPosts : renderSearchPosts}
    </div>
  )
}

export default PostContainer