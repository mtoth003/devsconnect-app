import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {FormField, Error} from "../styles"
import {useNavigate} from 'react-router'

function EditProfileForm({currentUser}) {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    github: "",
    linkedin: "",
    bio: "",
    image_url: "",
  })
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    fetch('api/me')
    .then(resp => resp.json())
    .then(data => setFormData(data))
  }, [isSelected])

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const configObj = {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    }
    fetch(`api/users/${currentUser.id}`, configObj)
    .then((r) => r.json())
    .then(() => {
      setFormData({
        first_name: "",
        last_name: "",
        username: "",
        github: "",
        linkedin: "",
        bio: "",
        image_url: "",
      })
      setIsSelected(false)
      window.location.reload(false)
    })
  }

  return (
    <div>
{isSelected ? 
    <EditFormStyle>
    <form className="edit-form" onSubmit={handleSubmit}>
    <h2>Edit Your Profile!</h2>
    <label>
        First Name:
        <input
        type="text"
        className="fix"
        placeholder="Update your name..."
        id="first_name"
        value={formData.first_name}
        onChange={(e) => handleChange(e)}
        />
    </label>
    <label>
        Last Name:
        <input
        type="text"
        className="fix"
        placeholder="Update your name..."
        id="last_name"
        value={formData.last_name}
        onChange={(e) => handleChange(e)}
        />
    </label>
    <label>
        Username:
        <input
        type="text"
        className="fix"
        placeholder="Update your username..."
        id="username"
        value={formData.username}
        onChange={(e) => handleChange(e)}
        />
    </label>
    <label>
        Github Link:
        <input
        type="text"
        placeholder="Update your Github..."
        id="github"
        value={formData.github}
        onChange={(e) => handleChange(e)}
        />
    </label>
    <label>
        LinkedIn Link:
        <input
        type="text"
        placeholder="Update your LinkedIn..."
        id="linkedin"
        value={formData.linkedin}
        onChange={(e) => handleChange(e)}
        />
    </label>
    <label>
        Bio:
        <textarea
        placeholder="Update your bio..."
        id="bio"
        value={formData.bio}
        onChange={(e) => handleChange(e)}
        />
    </label>
    <label>
        Profile Photo Link:
        <input
        type="text"
        placeholder="Update your profile photo..."
        id="image_url"
        value={formData.image_url}
        onChange={(e) => handleChange(e)}
        />
    </label>
    <button type="submit">Update!</button>
    <button onClick={() => setIsSelected(false)}>Cancel</button>
    </form>
</EditFormStyle>
:
<div className='edit-button'>
  <EditButtonStyle>
      <button onClick={() => setIsSelected(true)}>Edit Your Profile</button>
  </EditButtonStyle>
</div>
}
</div>
  )
}

const EditFormStyle = styled.div`

display: flex;
justify-content: center;
padding: 30px;

    h2 {
        font-size: 24px;
        margin: 2px;
    }


    form {
        width: 40%;
        margin: 10px;
        padding: 10px;
        border-radius: 15px;
        background-color: black;
        color: white;
        font-weight: bold;
        box-shadow: 7px 7px grey;
    }


    label {
        font-size: 16px;
        justify-content: left;
    }

    textarea {
        resize: none;
        display: block;
        margin: auto;
        width: 90%;
        height: 125px;
        font-family: arial;
        border-radius: 5px;
        text-align: top;
        padding: 5px;
    }

    input, #name, #username {
        display: block;
        justify-content: center;
        margin: auto;
        margin: 0px;
        position: relative;
        left: 20px;
        width: 90%;
        font-family: arial;
        border-radius: 5px;
        font-size: 12px;
        text-shadow: none;
        height: 20px;
        background-color: white;
        padding: 5px;
    }
    
    .fix {
        display: block;
        /* margin: auto; */
        width: 90%;
        font-family: arial;
        border-radius: 5px;
        font-size: 12px;
        text-shadow: none;
    }


    #img {
        text-align-last: center;
        margin: auto;
        padding: 5px;
        font-weight: bold;
    }

    button {
        background-color: white;
        border: none;
        color: black;
        font-weight: bold;
        padding: 8px 16px;
        border-radius: 10px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
      }

`

const EditButtonStyle = styled.div`
    
button {
    background-color: black;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
    padding: 12px 24px;
    border-radius: 10px;
    text-decoration: none;
    margin: 20px 20px;
    cursor: pointer;
    box-shadow: 5px 5px grey;
}


`

export default EditProfileForm