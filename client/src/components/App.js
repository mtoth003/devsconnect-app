import { Route, Routes } from "react-router-dom";
import {useState, useEffect} from "react";
// import NavBar from "./NavBar";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import FavoritesPage from "../pages/FavoritesPage";
import AccountPage from "../pages/AccountPage";

function App() {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  // const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    fetch("api/me").then((r) => {
      if (r.ok){
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  useEffect(() => {
    fetch("api/posts")
    .then((r) => r.json())
    .then(data => setPosts(data))
  }, [])

  // useEffect(() => {
  //   fetch(`/api/posts/users/${user.id}`)
  //   .then(r => r.json())
  //   .then(userPosts => setUserPosts(userPosts))
  // }, [])


  if (!user) return <Login onLogin={setUser} />

  return (
    <>
      {/* <NavBar user={user} setUser={setUser}/> */}
      <div>
        <Routes>
          <Route path="/" element={<HomePage posts={posts} currentUser={user} setUser={setUser}/>}/>
          <Route path="/favorites" element={<FavoritesPage/>}/>
          <Route path="account" element={<AccountPage currentUser={user} />}/>
        </Routes>
      </div>
    </>
    
  );
}

export default App;
