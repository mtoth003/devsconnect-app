import { Route, Routes } from "react-router-dom";
import {useState, useEffect} from "react";
// import NavBar from "./NavBar";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import FavoritesPage from "../pages/FavoritesPage";
import AccountPage from "../pages/AccountPage";

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch("api/me").then((r) => {
      if (r.ok){
        r.json().then((currentUser) => setCurrentUser(currentUser))
      }
    })
  }, [])

  if (!currentUser) return <Login onLogin={setCurrentUser} />

  return (
    <>
      {/* <NavBar user={user} setUser={setUser}/> */}
      <div>
        <Routes>
          <Route path="/" element={<HomePage currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
          <Route path="/favorites" element={<FavoritesPage currentUser={currentUser} name="favorites"/>}/>
          <Route path="/account" element={<AccountPage currentUser={currentUser} name="account" />}/>
        </Routes>
      </div>
    </>
    
  );
}

export default App;
