import {useState, useEffect} from 'react'
import UserPosts from '../components/UserPosts'
import styled from "styled-components"
import githublogo from "../images/github-logo.png"
import linkedinlogo from "../images/linkedin-logo.png"
import NavBar from '../components/NavBar'
import NewPostForm from '../components/NewPostForm'
import EditProfileForm from '../components/EditProfileForm'



function AccountPage({currentUser}) {
  const [userPosts, setUserPosts] = useState([])
  
  useEffect(() => {
    fetch(`/api/posts/users/${currentUser.id}`)
    .then(r => r.json())
    .then(userPosts => setUserPosts(userPosts))
  }, [])
  
  return (
    <div>
      <AccountHeader>
        <div className="head">
          <img className="profile-photo" src={currentUser.image_url} alt="profile"/>
            <div className="names">
            <h1 id="name2">{currentUser.first_name}</h1>
            <h1 id="name2">{currentUser.last_name}</h1>
            <h2 id="username2">@{currentUser.username}</h2>
            <a href={currentUser.github} target="_blank" rel="noreferrer"><img src={githublogo} alt="Github Link" style={{width: "30px", height: "30px"}}/></a>
            <a href={currentUser.linkedin} target="_blank" rel="noreferrer"><img src={linkedinlogo} alt="LinkedIn Link" style={{width: "30px", height: "30px"}}/></a>
          </div>
        </div>
        <div>
          <div className="bio">{currentUser.bio}</div>
          {/* <EditProfileForm currentUser={currentUser} /> */}
        </div>
        <div id="nav">
          <NavBar />
        </div>
        <div className="post-container">
          <NewPostForm currentUser={currentUser} />
          <h3>Your Posts:</h3>
          <UserPosts currentUser={currentUser} userPosts={userPosts}/>
        </div>
      </AccountHeader>
    </div>
  )
}

const AccountHeader = styled.div`
   
.profile-photo {
        border-radius: 150px;
        border: 1px solid black;
        margin: 5px;
        width: 150px;
        height: 150px;
        object-fit: cover;
        box-shadow: 4px 4px lightgrey;
        
    }
    #name2 {
        font-size: 40px;
        margin: 5px;
        text-shadow: 3px 3px lightgrey;
    }
    #username2 {
        font-size: 28px;
        margin: 5px;
        text-shadow: 3px 3px lightgrey;
    }
    .head {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .names {
        display: block;
    }
    .bio {
        background-color: black;
        color: white;
        margin: 10px;
        padding: 10px;
        margin-left: 30%;
        margin-right: 30%;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        box-shadow: 7px 7px grey;
        font-weight: bold;
    }
    .edit {
        position: relative;
        left: 72%; 
        width: 20%;
        margin: 20px;
        bottom: 58px;
        border: 1px solid black;
        border-radius: 15px;
        padding: 8px;
        box-shadow: 7px 7px grey;
        cursor: pointer;
    }
    .post-container {
        position: relative;
        bottom: 175px;
        margin: 0;
    }
    .post-container h3 {
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        z-index: -1;
    }
    #nav {
        position: relative;
        bottom: 80px;
        left: 3%;
        width: 25%;
        z-index: 1;
      
    }
`

export default AccountPage