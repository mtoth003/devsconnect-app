import {useState, useEffect} from 'react'
import Post from '../components/Post'
import PostContainer from '../components/PostContainer'
import NavBar from '../components/NavBar'

function FavoritesPage({currentUser, name}) {
  // const [favorites, setFavorites] = useState([])

  // useEffect(() => {
  //   fetch("api/favorites")
  //   .then((r) => r.json())
  //   .then(data => setFavorites(data))
  // }, [])

  // const favoritePosts = () => {
  //   return favorites.filter(fav => fav.user_id === currentUser.id)
  // }

  // const renderFavoritePosts = favoritePosts().map(favorite => console.log(favorite))

  return (
    <div>
      <NavBar />
      <PostContainer currentUser={currentUser} name={name}/>
    </div>
  )
}

export default FavoritesPage