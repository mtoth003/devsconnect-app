import {useState, useEffect} from 'react'
import Post from '../components/Post'
import PostContainer from '../components/PostContainer'
import NavBar from '../components/NavBar'
import FavPosts from '../components/FavPosts'

function FavoritesPage({currentUser, name}) {
  const [favorites, setFavorites] = useState([])
  
  useEffect(() => {
    fetch('api/favorites')
    .then(r => r.json())
    .then(data => setFavorites(data))
  }, [])

  const postUser = favorites.filter(fav => console.log(fav.post))

  const userFavs = favorites.filter(fav => fav.username === currentUser.username)

  const favPosts = userFavs.map(uf => <FavPosts post={uf.post} key={uf.post.id} currentUser={currentUser}/>)

  return (
    <div>
      <div className='fav-nav'>
        <NavBar />
      </div>
      <h2 style={{textAlign: "center"}}>Your Favorite Posts:</h2>
      {favPosts}
    </div>
  )
}

export default FavoritesPage