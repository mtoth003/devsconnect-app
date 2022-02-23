import {useState, useEffect} from "react"
// import {useNavigate} from 'react-router'
import styled from "styled-components"
import "../styles/Post.css"

function Post({post: {id, header, description, image_url, content_link, created_at, like_count, user}, currentUser}) {
  const [isFavorited, setIsFavorited] = useState(false)

  // const navigate = useNavigate()

  useEffect(() => {
    fetch("api/favorites")
    .then((r) => r.json())
    .then(data => {
      const filtered = data.filter(data => {
        return (data.post.id === id) && (data.user_id === currentUser.id)
      })
      filtered.length > 0 ? setIsFavorited(true) : setIsFavorited(false)
    })
  }, [])

  const handleFavorite = () => {
    fetch("api/favorites", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({
        user_id: currentUser.id,
        post_id: id
      }),
    })
    .then(r => r.json()).then(() => setIsFavorited(true))
  }


  const handleUnfavorite = () => {
    fetch("api/favorites")
    .then((r) => r.json())
    .then(data => {
      const filtered = data.filter(data => {
        return (data.post.id === id) && (data.user_id === currentUser.id)
      })
      filtered.forEach(fav => {
        fetch(`api/favorites/${fav.id}`, {
          method: "DELETE"
        })
        .then(r => {
          if(r.ok) {
            setIsFavorited(false)
          } 
        })
      })
    })
  }

  const parseTime = (created_at) => {
    const date = new Date(created_at)
    return date.getTime()
  }

  function timeSince(date) {

    const seconds = Math.floor((new Date().getTime() - date) / 1000);

    let interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  return (
    <PostCard>
      <div className="mock-outer">
        <div className="mock-inner">
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {isFavorited ? (
              <button
                onClick={handleUnfavorite}
                className="emoji-button favorite active"
              >
                ★
              </button>
            ) : (
              <button
                onClick={handleFavorite}
                className="emoji-button favorite"
              >
                ☆
              </button>
            )}
          </div>
          <div className="fb-group-picrow">
            <img src={user.image_url} />
            <div className="fb-group-text-top">
              <div className="fb-group-text">
                <h5 className="fbh5">{user.username}</h5>
                <span className="fb-group-date">{timeSince(parseTime(created_at))}</span>
              </div>
            </div>
          </div>
          <a href={content_link} target="_blank">
          <div className="mock-img-all">
            <div className="mock-img">
              <img src={image_url}/>
            </div>
            <div className="mock-title">
              <div className="mock-title2">
                <div className="mock-title-top">
                  <p>{header}</p>
                </div>
                <div className="mock-title-mid">{description}</div>
              </div>
            </div>
          </div>
          </a>
          <p>♡ {like_count}</p>
        </div>
      </div>
    </PostCard>
  )
}

const PostCard = styled.div`
  border: 3px solid black;
  position: relative;
  margin: 15px;
  margin-left: 30%;
  margin-right: 30%;
  border-radius: 20px;
  padding: 7px;
  box-shadow: 10px 10px grey;
  background: white;

`

export default Post